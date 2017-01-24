"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if(err) { throw err; }
    else{
      res.send(data.searches);
    }
  })
});

router.post('/', (req, res) => {
  User.create({
    search:req.body.searches,
    hashedPassword: req.body.hashedPassword
  }, (err,data) => {
    if(err) {throw err};
    res.send(data.searches);
  })
  });





module.exports = router
