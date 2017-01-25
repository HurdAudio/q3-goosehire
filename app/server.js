"use strict";

require('dotenv').config();
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

//database
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/goosehire');
mongoose.connection.on('error', () => {console.log('mongo connection failed')})
  .once('open', () => {console.log('mongo is lit')});


//Oauth with Passport
// app.use(cookieSession({
//    name: 'session',
//    keys: [process.env.SECRET_KEY]
// }));
//
// app.use(passport.initialize());
// app.use(passport.session());
//
// passport.serializeUser(function(user, done) {
//    //Decide what to store in session.
//    done(null, user);
// });
//
// passport.deserializeUser(function(obj, done) {
//    //Take whats stored in session and query database/etc.
//    done(null, obj);
// });
//
// passport.use(new LinkedInStrategy( {
//    consumerKey: process.env['LINKEDIN_CLIENT_ID'],
//    consumerSecret: process.env['LINKEDIN_CLIENT_SECRET'],
//    callbackURL: "http://localhost:3000/auth/linkedin/callback",
//    scope:['r_basicprofile']
// },function(token, tokenSecret, profile, done) {
//    // Get user from database or create.
//    return done(null, profile);
// }));
//end of Oauth stuff


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


//routes
app.use('/users', require('./routes/users'));
app.use('/skillsets', require('./routes/skillsets'));
app.use('/searches', require('./routes/searches'));

// app.use('/auth', require('./routes/auth'));


app.use(express.static(path.join(__dirname, '/../', 'node_modules')));


//api call to indeed
app.get('/indeed', (req, res) => {
  let searchInfo = {
    skills: encodeURIComponent(req.query.skills),
    location: encodeURIComponent(req.query.location),
    title: encodeURIComponent(req.query.title)
  };

  //TODO: Do we need to get the useragent dynamically from the browser for the search string below? -- CDH

  const newUrl = `http://api.indeed.com/ads/apisearch?publisher=331559334344654&q=${searchInfo.skills}&l=${searchInfo.location}&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=localhost:3000&useragent=Mozilla%2F5.0+(Macintosh%3B+Intel+Mac+OS+X+10_11_6)+AppleWebKit%2F537.36+(KHTML%2C+like+Gecko)+Chrome%2F55.0.2883.95+Safari%2F537.36&v=2&format=json`;

  return request(newUrl).pipe(res);
});

app.get('/indeedSingleJob', (req, res) => {
  return request(req.query.url, (error, response, html) => {
    let $ = cheerio.load(html);
    let jobDeets = $('#job_summary').html();

    res.send(jobDeets);
  })
})


//default endpoint
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});


//set environments
const port = 3007;

if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan');
  app.use(logger('dev'));
}

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
