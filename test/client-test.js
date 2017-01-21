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

// TEST FOR SEARCHES

suite('verify basic functionality of searches', function(){

    test('GET /index.html/searches - returns all searches in users account', (done) => {

      request(app)
        .get('/searches')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    test('GET /index/searches by id  - returns json of single record.', (done) => {
      request(app)
        .get('/searches/1')
        .expect('Content-Type', /json/)
        .expect(200, {
          title: 'Fluffer',
          location: 'San Antonio, TX'
        }, done);
    });

    test('POST /index/searches - create new search.', (done) => {
        request(app)
          .post('/searches')
          .set('Accept', 'application/json')
          .send({
            title: 'Fluffer',
            location: 'Seatle, WA'
          })
          .expect('Content-Type', /json/)
          .expect(200, {
            title: 'Fluffer',
            location: 'Seatle, WA'
          },done);

    });

    test('PATCH /index/searches - revises search.', (done) => {
      request(app)
        .patch('/searches/1')
        .set('Accept', 'application/json')
        .send({
          title: 'Horse Whisperer'
        })
        .expect('Content-Type', /json/)
        .expect(200, {
          title: 'Horse Whisperer',
          location: 'San Antonio, TX'
        },done);

    });

    test('DELETE /index/searches - delete search item.', (done) => {
      request(app)
        .del('/search/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          title: 'Horse Whisperer',
          location: 'San Antonio, TX'
        },done);


    });



  });

suite('verify basic functionality of skillsets', function(){

    test('GET /index.html', (done) => {

      request(app)
        .get('/skillsets')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    test('GET /index/skillsets by id  - returns json of single record.', (done) => {
      request(app)
        .get('/skillsets/1')
        .expect('Content-Type', /json/)
        .expect(200, {
          1: ['horse rangling', 'clowning', 'magic tricks', 'exorcism'],
          2: ['javascript', 'angular', 'writing tests']
        }, done);
    });

    test('POST /index/skillsets - create new skillsets.', (done) => {
        request(app)
          .post('/skillsets')
          .set('Accept', 'application/json')
          .send({
            1: ['dare devil', 'comedian', 'Daytime Talkshow Host'],
            2: ['scupa diver', 'elvis impersonator', 'jesus impersonator']
          })
          .expect('Content-Type', /json/)
          .expect(200, {
            1: ['dare devil', 'comedian', 'Daytime Talkshow Host'],
            2: ['scupa diver', 'elvis impersonator', 'jesus impersonator']
          },done);

    });

    test('PATCH /index/skillsets - revises skillsets.', (done) => {
      request(app)
        .patch('/skillsets/1')
        .set('Accept', 'application/json')
        .send({
          1: ['Hobbit', 'Wizard', 'Elf']
        })
        .expect('Content-Type', /json/)
        .expect(200, {
          1: ['Hobbit', 'Wizard', 'Elf'],
          2: ['javascript', 'angular', 'writing tests']
        },done);

    });

    test('DELETE /index/skillsets - delete skillset item.', (done) => {
      request(app)
        .del('/skillsets/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          1: ['dare devil', 'comedian', 'Daytime Talkshow Host'],
          2: ['scupa diver', 'elvis impersonator', 'jesus impersonator']
        },done);


    });
  });

suite('verify basic functionality of users', function(){

    test('GET /index.html', (done) => {

      request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    test('GET /index/users by id  - returns json of single record.', (done) => {
      request(app)
        .get('/users/1')
        .expect('Content-Type', /json/)
        .expect(200, {
          name: "Devin Hurd",
          email: "hurd@gmail.com"
        }, done);
    });

    test('POST /index/users - create new users.', (done) => {
        request(app)
          .post('/users')
          .set('Accept', 'application/json')
          .send({
            name: 'Jason Goldfarb',
            email: 'farb@gmail.com'

          })
          .expect('Content-Type', /json/)
          .expect(200, {
            name: 'Jason Goldfarb',
            email: 'farb@gmail.com'
          },done);

    });

    test('PATCH /index/users - revises users.', (done) => {
      request(app)
        .patch('/users/1')
        .set('Accept', 'application/json')
        .send({
          email: 'george@gmail.com'
        })
        .expect('Content-Type', /json/)
        .expect(200, {
          name: 'Devin Hurd',
          email: 'george@gmail.com'
        },done);

    });

    test('DELETE /index/users - delete users item.', (done) => {
      request(app)
        .del('/users/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          name: 'Jason Goldfarb',
          email: 'farb@gmail.com'
        },done);


    });
  });
