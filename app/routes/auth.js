"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');

//send to LinkedIn
router.get('/linkedin', passport.authenticate('linkedin'));


//callback from LinkedIn
router.get('/linkedin/callback', passport.authenticate('linkedin',{
    successRedirect :'/',
    failureRedirect :'/'
  })
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
