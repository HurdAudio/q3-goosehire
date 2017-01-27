"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

//send to LinkedIn
router.get('/linkedin', passport.authenticate('linkedin'));


//callback from LinkedIn
router.get('/linkedin/callback', passport.authenticate('linkedin',{
    successRedirect :'/',
    failureRedirect :'/'
  }
//   , () => {
//     console.log('linkedin callback');
//   })
// )
));

router.get('/userid', (req, res) => {
  if(!req.user) {
    res.send(false);
  }
  else {
    User.findOne({linkedInId: req.user}, (err, data) => {
      if(!data) {
        res.send(false);
      }
      else {
        res.send(data._id);
      }
    // res.send(req.user);
    })
  }
});

router.get('/logout', function(req, res){
  console.log('logout', req.user);
  req.logout();
  res.redirect('/');
});

module.exports = router;
