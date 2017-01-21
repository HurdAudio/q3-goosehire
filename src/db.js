var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/goosehire');

var db = mongoose.connection;

db.on('error', () => {console.log('lol sux')})
  .once('open', () => {console.log('u good')});


module.exports = db;
