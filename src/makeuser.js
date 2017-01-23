const User = require('./app/users');

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

devin.save((err) => {
  if(err) {
    return console.error(err);
  }
  else {
    console.log('coolio');
  }
});
