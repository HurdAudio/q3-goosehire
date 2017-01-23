"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');


router.get('/', (req, res) => {
  User.find((err, data) => {
    if(err) { throw err; }
    else {
      res.send(data);
    }
  })
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    console.log(req.params.id);
    if(err) { throw err; }
    else {
      res.send(data);
    }
  })
});

router.post('/', (req, res) => {
  // var { username, hashedPassword } = req.body;
  // res.status(200).send(username, hashedPassword)
  // res.send(req.body);
  User.create({
    username: req.body.username,
    hashedPassword: req.body.hashedPassword
  }, (err, data) => {
    if(err) {throw err};
    res.send(data);
  })
});

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});


module.exports = router;
