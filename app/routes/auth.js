"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');

//send to LinkedIn
router.get('/linkedin', passport.authenticate('linkedin'));

// router.get('/linkedin', function(req, res, next) {
//   passport.authenticate('linkedin', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.send('no user'); }
//     // req.logIn(user, function(err) {
//       // if (err) { return next(err); }
//       return res.send(user + '##########################');
//       // return res.send(user + '######################################');
//     // });
//   })(req, res, next);
// });

//callback from LinkedIn
router.get('/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: `/`,
  failureRedirect: '/'
})
);

// router.get('/linkedin/callback', (req, res, next) => {
//   passport.authenticate('linkedin', {
//     res.send('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
//   })
// })

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
