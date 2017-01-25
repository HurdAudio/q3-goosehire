"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');


//Oauth
router.get('/', function(req,res,next) {
    res.send('Auth');
});

router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback', passport.authenticate('linkedin',{
    successRedirect :'/',
    failureRedirect :'/'}
    )
);

router.get('/', (req, res) => {
  User.find((err, data) => {
    if(err) { throw err; }
    else {
      res.send(data);
    }
  })
});//end Oauth
