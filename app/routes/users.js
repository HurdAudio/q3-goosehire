"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

// const bodyParser


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
    if(err) { throw err; }
    else {
      res.send(data);
    }
  })
});

router.post('/', (req, res) => {

});

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});


module.exports = router;
