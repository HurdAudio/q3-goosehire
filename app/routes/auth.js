"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin').Strategy;
const cookieSession = require('cookie-session');

router.get('/', function(req,res,next) {

    if (!req.user) {
        console.log('please login');
        // res.send('please log in <a href="/"><button>Home</button></a>');
        // res.redirect('/');
    }
    else{
        console.log("authorized req.user info:", req.user);
        // res.send('logged in <a href="/"><button>Home</button></a>');
    }
});

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
   //Decide what to store in session.
   done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   //Take whats stored in session and query database/etc.
   console.log('req.user deserial:', id);
   done(null, id);
});

passport.use(new LinkedInStrategy( {
   consumerKey: process.env['LINKEDIN_CLIENT_ID'],
   consumerSecret: process.env['LINKEDIN_CLIENT_SECRET'],
   callbackURL: "http://localhost:3000/auth/linkedin/callback",
   scope:['r_basicprofile', 'r_emailaddress']
},function(token, tokenSecret, profile, done) {
   // Get user from database or create.
   //this is where we will do get to mongo with
   console.log('here is id to use in get to db', profile.id);
   return done(null, profile);
}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

//send to LinkedIn
router.get('/linkedin', passport.authenticate('linkedin'));

//callback from LinkedIn
router.get('/linkedin/callback', passport.authenticate('linkedin',{
    successRedirect :'/',
    failureRedirect :'/'}
    )
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
