"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');

//gets all of a users searches
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if(err) { throw err; }
    else {
      res.send(data.searches);
    }
  })
});

//gets one of a users search, by userid and search id
router.get('/:userid/:id', (req, res) => {
  User.find({'id': req.params.userid, $where: this.searches._id === req.params.id}).exec( (err, data) => {
    if(err) { throw err; }
    else {
      res.send(data);
    }
  })
});

//posts new search to users searches
router.post('', (req, res) => {

});

//updates one of a users searches
router.patch('', (req, res) => {

});

// deletes a users search
router.delete('', (req, res) => {

});



module.exports = router
