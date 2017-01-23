'use strict';

// console.log('CWD', process.cwd());

process.env.NODE_ENV = 'test';


// const express = require('express');
const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../app/server');

// const app = express();

suite('Verify basic functionality of GooseHire API', () => {

  test('GET /index.html', (done) => {
    /* eslint-disable max-len */
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);

      /* eslint-enable max-len */
  });

});

suite('Verify basic functionality of Indeed API', () => {

  test('GET /index.html/indeed', (done) => {
    /* eslint-disable max-len */
    request(server)
      .get('/indeed')
      .expect('Content-Type', /json/)
      .expect(200, done);

      /* eslint-enable max-len */
  });

});

// TEST FOR SEARCHES

suite('verify basic functionality of searches', () => {

    test('GET /index.html/searches - returns all searches in users account', (done) => {

      request(server)
        .get('/searches')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    test('GET /index/searches by id  - returns json of single record.', (done) => {
      request(server)
        .get('/searches/1')
        .expect('Content-Type', /json/)
        .expect(200, {
          title: 'Fluffer',
          location: 'San Antonio, TX'
        }, done);
    });

    test('POST /index/searches - create new search.', (done) => {
        request(server)
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
          }, done);

    });

    test('PATCH /index/searches - revises search.', (done) => {
      request(server)
        .patch('/searches/1')
        .set('Accept', 'application/json')
        .send({
          title: 'Horse Whisperer'
        })
        .expect('Content-Type', /json/)
        .expect(200, {
          title: 'Horse Whisperer',
          location: 'San Antonio, TX'
        }, done);

    });

    test('DELETE /index/searches - delete search item.', (done) => {
      request(server)
        .del('/search/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          title: 'Horse Whisperer',
          location: 'San Antonio, TX'
        }, done);


    });



  });

suite('verify basic functionality of skillsets', () => {

    test('GET /index.html', (done) => {

      request(server)
        .get('/skillsets')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    test('GET /index/skillsets by id  - returns json of single record.', (done) => {
      request(server)
        .get('/skillsets/1')
        .expect('Content-Type', /json/)
        .expect(200, {
          1: ['horse rangling', 'clowning', 'magic tricks', 'exorcism'],
          2: ['javascript', 'angular', 'writing tests']
        }, done);
    });

    test('POST /index/skillsets - create new skillsets.', (done) => {
        request(server)
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
          }, done);

    });

    test('PATCH /index/skillsets - revises skillsets.', (done) => {
      request(server)
        .patch('/skillsets/1')
        .set('Accept', 'application/json')
        .send({
          1: ['Hobbit', 'Wizard', 'Elf']
        })
        .expect('Content-Type', /json/)
        .expect(200, {
          1: ['Hobbit', 'Wizard', 'Elf'],
          2: ['javascript', 'angular', 'writing tests']
        }, done);

    });

    test('DELETE /index/skillsets - delete skillset item.', (done) => {
      request(server)
        .del('/skillsets/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          1: ['dare devil', 'comedian', 'Daytime Talkshow Host'],
          2: ['scupa diver', 'elvis impersonator', 'jesus impersonator']
        }, done);


    });
  });

suite('verify basic functionality of users', () => {

    test('GET /index.html', (done) => {

      request(server)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    test('GET /index/users by id  - returns json of single record.', (done) => {
      request(server)
        .get('/users/1')
        .expect('Content-Type', /json/)
        .expect(200, {
          username: "devinhurd",
          hashedPassword: "1234567890123456",
          
        }, done);
    });

    test('POST /index/users - create new users.', (done) => {
        request(server)
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
          }, done);

    });

    test('PATCH /index/users - revises users.', (done) => {
      request(server)
        .patch('/users/1')
        .set('Accept', 'application/json')
        .send({
          email: 'george@gmail.com'
        })
        .expect('Content-Type', /json/)
        .expect(200, {
          name: 'Devin Hurd',
          email: 'george@gmail.com'
        }, done);

    });

    test('DELETE /index/users - delete users item.', (done) => {
      request(server)
        .del('/users/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          name: 'Jason Goldfarb',
          email: 'farb@gmail.com'
        }, done);


    });
  });
