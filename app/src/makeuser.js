const User = require('./users');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var devin = new User({
  username: 'devinsux',
  hashedPassword: '1234567890123456',
  skills: {
    skillSet: ['sarcasm', 'drinking']
  },
  searches: {
    location: {
      city: 'seattle',
      state: 'washington'
    },
    jobTitle: 'full stack dev',
    skillSet: ['memes']
  }
});

console.log(devin);

// devin.saveAsync()
// .spread((res) => {
//   console.log(JSON.stringify(res))
// })
// .catch((err) => {
//   console.log('err');
// })

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/goosehire');

mongoose.connection.on('error', () => {console.log('mongo connection failed')})
  .once('open', () => {
    console.log('mongo is lit')
    console.log(devin);
    devin.save((err) => {
      console.log('saving...');
      if(err) {
        throw err;
      }
      else {
        console.log('saved!!!!!!!!!!!!!!!');
      }
    });
  });

// devin.save((err) => {
//   console.log('saving...');
//   if(err) {
//     throw err;
//   }
//   else {
//     console.log('saved!!!!!!!!!!!!!!!');
//   }
// });
