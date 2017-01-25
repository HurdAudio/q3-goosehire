"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');


router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if(err) throw err;
    else {
      res.send(data.skills);
    }
  })
});

router.get('/:userid/:id', (req, res) => {
  var skillsId = req.params.id;
  User.findById(req.params.userid, (err, data) => {
    if(err) throw err;
    else {
      for (var i = 0; i < data.skills.length; i++) {
        var skills = data.skills[i];
        if(skills._id == skillsId) {
          res.send(skills);
        }
        else {
          console.log('skillset not found');
        }
      }
    }
  })
});

router.post('/:userid', (req, res) => {
  User.findById(req.params.userid, (err, data) => {
    if(err) throw err;
    else {
      data.skills.push({
        skillSet: req.body.skillSet,
      });
      data.save((err, data) => {
          if (err) throw err;
          res.send(data);
        })
      }
  })
});

router.delete('/:userid/:id', (req, res) => {
  var skillsId = req.params.id;
  User.findById(req.params.userid, (err, data) => {
    if(err) throw err;
    else {
      data.skills.pull({_id: skillsId});
      data.save((err, data) => {
        if (err) throw err;
        res.send(data);
      })
    }
  })
});


module.exports = router;
