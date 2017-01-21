'use strict';

process.env.NODE_ENV = 'test';


const express = require('express');
const { suite, test } = require('mocha');
const request = require('supertest');
// const server = require('../server');

const app = express();

suite('Verify basic functionality of GooseHire API', () => {

  test('GET /index.html', (done) => {
    /* eslint-disable max-len */
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);

      /* eslint-enable max-len */
  });

});

suite('verify basic functionality of searches', function(){

    test('GET /index.html', (done) => {

      request(app)
        .get('/searches')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

suite('verify basic functionality of skillsets', function(){

    test('GET /index.html', (done) => {

      request(app)
        .get('/skillsets')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

suite('verify basic functionality of users', function(){

    test('GET /index.html', (done) => {

      request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
