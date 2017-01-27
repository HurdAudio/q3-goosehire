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
  }
//   , () => {
//     console.log('linkedin callback');
//   })
// )
));

// router.get('/userid', (req, res) => {
//   console.log(req.user);
//   res.send(req.user);
// });

router.get('/logout', function(req, res){
  console.log('logout', req.user);
  req.logout();
  res.redirect('/');
});

module.exports = router;
