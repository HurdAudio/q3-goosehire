"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const request = require('request');
const rpn = require('request-promise-native');
const cheerio = require('cheerio');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin').Strategy;
const cookieSession = require('cookie-session');
const User = require('./src/users');
mongoose.Promise = require('bluebird');

require('dotenv').config();

const port = process.env.PORT || 3007;

if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan');
  app.use(logger('dev'));
}

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/goosehire');

mongoose.connection.on('error', () => {console.log('mongo connection failed')})
  .once('open', () => {console.log('mongo is lit')});

//Oauth with Passport
app.use(cookieSession({
   name: 'session',
   keys: [process.env.SECRET_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
   //Decide what to store in session.
  //  console.log(user);
   done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   //Take whats stored in session and query database/etc.
  //  console.log('req.user deserial:', id);
   done(null, id);
});


passport.use(new LinkedInStrategy( {
   consumerKey: process.env['LINKEDIN_CLIENT_ID'],
   consumerSecret: process.env['LINKEDIN_CLIENT_SECRET'],
   callbackURL: `http://localhost:3007/auth/linkedin/callback`,
   scope:['r_basicprofile', 'r_emailaddress']
},function(token, tokenSecret, profile, done) {
  User.findOne({linkedInId: profile.id}, (err, data) => {
     if(!data) {
      User.create({
        linkedInId: id
      }, (err, data) => {
        if(err) {throw err};
        console.log(data._id);
        return data._id;
      })
     }
     else {
       console.log(data._id);
       return data._id;
     }
  })
   return done(null, profile);
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/users', require('./routes/users'));
app.use('/skillsets', require('./routes/skillsets'));
app.use('/searches', require('./routes/searches'));
app.use('/auth', require('./routes/auth'));


// app.use(function(req,res,next) {
//   console.log('user', req.user);
//   next();
// });

app.use(express.static(path.join(__dirname, '/../', 'node_modules')));


app.get('/indeed', (req, res) => {
  let searchInfo = {
    skills: encodeURIComponent(req.query.skills),
    location: encodeURIComponent(req.query.location),
    title: encodeURIComponent(req.query.title)
  };

  //TODO: Do we need to get the useragent dynamically from the browser for the search string below? -- CDH

  const newUrl = `http://api.indeed.com/ads/apisearch?publisher=${process.env.INDEED_KEY}&q=${searchInfo.skills}&l=${searchInfo.location}&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=localhost:3000&useragent=Mozilla%2F5.0+(Macintosh%3B+Intel+Mac+OS+X+10_11_6)+AppleWebKit%2F537.36+(KHTML%2C+like+Gecko)+Chrome%2F55.0.2883.95+Safari%2F537.36&v=2&format=json`;

  return request(newUrl).pipe(res);
});

app.get('/indeedSingleJob', (req, res) => {
  return request(req.query.url, (error, response, html) => {
    let $ = cheerio.load(html);
    let textArray = [];
    let jobDeets = $('#job_summary');
    let deetsKids = jobDeets.children();

    console.log(`loop results: arraylength: ${deetsKids.length}`);

    // parse html into array in prep for passing to wordcloud
    for (let i=0; i < deetsKids.length; i++) {

      if (deetsKids[i].type === 'text') {
        textArray.push({
          type: deetsKids[i].name || deetsKids[i].type,
          text: deetsKids[i].data
        });
      } else {
        switch (deetsKids[i].name) {
          case 'p':
            if (deetsKids[i].children[0].name) {
              textArray.push({
                type: `${deetsKids[i].name}, ${deetsKids[i].children[0].name}`,
                text: deetsKids[i].children[0].children[0].data
              });
            } else {
              textArray.push({
                type: deetsKids[i].name,
                text: deetsKids[i].children[0].data
              });
            };
            break;

            case 'b':
              if (deetsKids[i].children[0].name) {
                textArray.push({
                  type: `${deetsKids[i].name}, ${deetsKids[i].children[0].name}`,
                  text: deetsKids[i].children[0].children[0].data
                });
              } else {
                textArray.push({
                  type: deetsKids[i].name,
                  text: deetsKids[i].children[0].data
                });
              };
              break;

          case 'ul':
            for (let j=0; j < deetsKids[i].children.length; j++) {
              if (deetsKids[i].children[j].children[0].name) {
                textArray.push({
                  type: `${deetsKids[i].name}, ${deetsKids[i].children[j].name}, ${deetsKids[i].children[j].children[0].name}`,
                  text: deetsKids[i].children[j].children[0].children[0].data
                })
              } else {
                textArray.push({
                  type: `${deetsKids[i].name}, ${deetsKids[i].children[j].name}`,
                  text: deetsKids[i].children[j].children[0].data
                })
              }
            }
            break;

          case 'li':
            if (deetsKids[i].children[0].name) {
              textArray.push({
                type: `${deetsKids[i].name}, ${deetsKids[i].children[0].name}`,
                text: deetsKids[i].children[0].children[0].data
              });
            } else {
              textArray.push({
                type: deetsKids[i].name,
                text: deetsKids[i].children[0].data
              });
            };
            break;

          case 'br':
            if (deetsKids[i].next.data && deetsKids[i].next.data !== '\n') {
              textArray.push({
                type: deetsKids[i].name,
                text: deetsKids[i].next.data
              });
            };
            break;

          default:
            console.log(`deetsKids ${i}: ${deetsKids[i].name}`);
        }
      }
    }

    console.log('textArray: ', textArray);
    console.log('=========================');

    let parsedArray = [];

    for (let k=0; k < textArray.length; k++) {
      parsedArray.push({
        type: textArray[k].type,
        text: textArray[k].text.replace(/\n/g,'')
      });
    }

    console.log('parsed: ', parsedArray);

// handing both the parsed array (for the word cloud), and the raw html (for display) back to the component
    const jobDetails = {
      html: jobDeets.html(),
      array: textArray
    };

    res.send(jobDetails);
    });
});

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
