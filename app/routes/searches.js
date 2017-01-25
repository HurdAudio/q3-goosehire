"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/users');
mongoose.Promise = require('bluebird');
<!--get route works -->
router.get('/:id', (req, res) =>{
  User.findById(req.params.id, (err, data) => {
    if(err) { throw err; }
    else {
      res.send(data.searches)
    }
  })
});
<!--get searches by id-->


router.get('/:userid/:searchid', (req, res) => {
  var searchId = req.params.searchid;
  // res.send(searchId);
  User.findById(req.params.userid, (err, data)=> {
    if(err) {throw err;}
      else{
        for (var i = 0; i < data.searches.length; i++) {
          var searches = data.searches[i];
          if(searches._id == searchId){
            res.send(searches)
          }
          else {
            console.log("searches not found");
          }

        }
      }
    })
  })

  router.post('/:id', (req, res) =>{
    User.findById(req.params.id, (err, data)=> {
      if(err) {throw err;}
      else{
        data.searches.push({
          location: req.body.location,
          jobTitle: req.body.jobTitle,
          skillSet: req.body.skills

        });

        data.save((err, data) => {
          if(err) throw err;
          res.send(data);

        })
      }
    })
  });

router.delete('/:userid/:searchid', (req, res) => {
  var searchId = req.params.searchid;
  // var userId = req.params.userid;
  User.findById(req.params.userid, (err, data)=> {
    if(err) {throw err;}
      else {
        data.searches.pull({_id: searchId});
          data.save((err, data)=> {
            if (err) throw err;
            res.send(data);

          })
      }
    })
  });







module.exports = router
