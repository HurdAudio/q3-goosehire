"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');


router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if(err) { throw err; }
    else {
      res.send(data.skills);
    }
  })
});

router.get('/:userid/:id', (req, res) => {
  var searchId = req.params.id;
  User.findById(req.params.userid, (err, data) => {
    if(err) {throw err;}
    else {
      for (var i = 0; i < data.skills.length; i++) {
        var skills = data.skills[i];
        if(skills._id == searchId) {
          res.send(skills);
        }
        else {
          res.send('skillset not found');
        }
      }
    }
  })
})

router.post('/:userid/:id', (req, res) => {
  User.findById(req.params.userid, (err, data) => {
    if(err) { throw err; }
    else {
      data.skills.push({
        skillSet: req.body.skills,
      });
      data.save(function (err, data) {
          if (err) throw err;
          res.send(data);
        })
    }
  })
});

router.delete('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if(err) throw err;
    data.remove((err, data) => {
      if(err) throw err;
      res.send(data);
    })
  })
});


module.exports = router;
