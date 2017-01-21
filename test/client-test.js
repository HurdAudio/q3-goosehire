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
