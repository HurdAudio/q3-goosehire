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

router.get('/users/:id', (req, res) => {

});

router.post('/users', (req, res) => {

});

router.patch('/users/:id', (req, res) => {

});

router.delete('/users/:id', (req, res) => {

});


module.exports = router;
