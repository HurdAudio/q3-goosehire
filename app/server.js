"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const request = require('request')

if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan');
  app.use(logger('dev'));
}

app.use(bodyParser.json());

//these need to be modified
// app.use('/api/posts', require('./routes/searches'));
// app.use('/api/posts', require('./routes/skillsets'));
// app.use('/api/posts', require('./routes/users'));


app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

module.exports = app
