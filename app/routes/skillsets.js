"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

router.get('/', (req, res) => {
  User.findOne({ id: _id }, 'skillsets', function (err, person) {
    if(err) { throw err; }
    else {
      res.send(data);
    }
  });
});

  // User.find(err, data) => {
  //   if(err) { throw err; }
  //   else {
  //     res.send(data);
  //   }
  // }

router.get('/skillsets/:id', (req, res) => {

});

router.post('/users', (req, res) => {

});

module.exports = router;
