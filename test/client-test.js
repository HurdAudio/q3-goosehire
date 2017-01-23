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

    test('GET /index.html/searches/:user-id/:skill-id - returns all searches in users account', (done) => {

      request(server)
        .get('/searches/58862bb83c085df2aaf099cd')
        .expect('Content-Type', /json/)
        .expect(200, {
          searches: [
              {
                  _id: "58862bb83c085df2aaf099cd",
                  jobTitle: "full stack dev",
                  location: {
                      city: "seattle",
                      state: "washington"
                  },
                  skillSet: [
                      "memes"
                  ]
              }
          ]
        }, done);
    });

    test('GET /index/searches/:user-id by id  - returns json of single record.', (done) => {
      request(server)
        .get('/searches/58862bb83c085df2aaf099cd/1')
        .expect('Content-Type', /json/)
        .expect(200, {
                _id: "58862bb83c085df2aaf099cd",
                jobTitle: "full stack dev",
                location: {
                    city: "seattle",
                    state: "washington"
                },
                skillSet: [
                    "memes"
                ]
        }, done);
    });

    test('POST /index/searches/:user-id - create new search.', (done) => {
        request(server)
          .post('/searches/58862bb83c085df2aaf099cd')
          .set('Accept', 'application/json')
          .send({
            search: {
              jobTitle: "unicorn rider",
              location: {
                city: "neverland"
              },
              skillSet: [
                "glitter",
                "horse riding"
              ]
            }
          })
          .expect('Content-Type', /json/)
          .expect(200,
              {
                jobTitle: "unicorn rider",
                location: {
                  city: "neverland"
                },
                skillSet: [
                  "glitter",
                  "horse riding"
                ]
              }, done);

    });

    test('PATCH /index/searches/:user-id/:search-id - revises search.', (done) => {
      request(server)
        .patch('/searches/58862bb83c085df2aaf099cd/2')
        .set('Accept', 'application/json')
        .send({
          jobTitle: "flower farmer"
        })
        .expect('Content-Type', /json/)
        .expect(200,
              {
                jobTitle: "flower farmer",
                location: {
                  city: "neverland"
                },
                skillSet: [
                  "glitter",
                  "horse riding"
                ]
              }, done);

    });

    test('DELETE /index/searches/:user-id/:search-id - delete search item.', (done) => {
      request(server)
        .del('/search/58862bb83c085df2aaf099cd/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200,
            {
              jobTitle: "flower farmer",
              location: {
                city: "neverland"
              },
              skillSet: [
                "glitter",
                "horse riding"
              ]
            }, done);

    });
  });

suite('verify basic functionality of skillsets', () => {

    test('GET /index/skillsets/:user-id - returns all skillsets associated wit h a user', (done) => {

      request(server)
        .get('/skillsets/58862bb83c085df2aaf099cd')
        .expect('Content-Type', /json/)
        .expect(200, {
              _id: "58862bb83c085df2aaf099ce",
              createdAt: "2017-01-23T16:13:44.096Z",
              skillSet: [
                  "sarcasm",
                  "drinking"
              ]
        },done);
    });

    test('GET /index/skillsets/:user-id/:skills-id by id  - returns json of single record.', (done) => {
      request(server)
        .get('/skillsets/58862bb83c085df2aaf099cd/1')
        .expect('Content-Type', /json/)
        .expect(200,
              {
                  _id: "58862bb83c085df2aaf099ce",
                  createdAt: "2017-01-23T16:13:44.096Z",
                  skillSet: [
                      "sarcasm",
                      "drinking"
                  ]
              }, done);
    });

    test('POST /index/skillsets/:user-id - create new skillsets.', (done) => {
        request(server)
          .post('/skillsets/58862bb83c085df2aaf099cd')
          .set('Accept', 'application/json')
          .send({
            skills: ['dare devil', 'comedian', 'Daytime Talkshow Host']
          })
          .expect('Content-Type', /json/)
          .expect(200,
              {
                  createdAt: "2017-01-23T16:13:44.096Z",
                  skillSet: [
                      "dare devil",
                      "comedian",
                      "Daytime Talkshow Host"
                  ]
              }, done);

    });

    test('PATCH /index/skillsets/:user-id/:skills-id - revises skillsets.', (done) => {
      request(server)
        .patch('/skillsets/58862bb83c085df2aaf099cd/1')
        .set('Accept', 'application/json')
        .send({
          skill: ['witty taglines']
        })
        .expect('Content-Type', /json/)
        .expect(200, {
              _id: "58862bb83c085df2aaf099ce",
              createdAt: "2017-01-23T16:13:44.096Z",
              skillSet: [
                  "sarcasm",
                  "drinking",
                  "witty taglines"
              ]
        }, done);
    });

    test('DELETE /index/skillsets/:user-id/:skills-id - delete skillset item.', (done) => {
      request(server)
        .del('/skillsets/58862bb83c085df2aaf099cd/2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200,
              {
                  createdAt: "2017-01-23T16:13:44.096Z",
                  skillSet: [
                      "dare devil",
                      "comedian",
                      "Daytime Talkshow Host"
                  ]
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
        .get('/users/58862bb83c085df2aaf099cc')
        .expect('Content-Type', /json/)
        .expect(200, {
          username: "devinhurd",
          hashedPassword: "1234567890123456",
          searches: [
              {
                  _id: "58862bb83c085df2aaf099cd",
                  jobTitle: "full stack dev",
                  location: {
                      city: "seattle",
                      state: "washington"
                  },
                  skillSet: [
                      "memes"
                  ]
              }
          ],
          skills: [
              {
                  _id: "58862bb83c085df2aaf099ce",
                  createdAt: "2017-01-23T16:13:44.096Z",
                  skillSet: [
                      "sarcasm",
                      "drinking"
                  ]
              }
          ]
        }, done);
    });

    test('POST /index/users - create new users.', (done) => {
        request(server)
          .post('/users')
          .set('Accept', 'application/json')
          .send({
            username: 'jasongoldfarb',
            hashedPassword: '1234567890123456'
          })
          .expect('Content-Type', /json/)
          .expect(200, {
            username: 'jasongoldfarb',
            hashedPassword: '1234567890123456'
          }, done);

    });

    test('PATCH /index/users - revises users.', (done) => {
      request(server)
        .patch('/users/')
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
        .del('/users/58862bb83c085df2aaf099cc')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          username: "devinhurd",
          hashedPassword: "1234567890123456",
          searches: [
              {
                  _id: "58862bb83c085df2aaf099cd",
                  jobTitle: "full stack dev",
                  location: {
                      city: "seattle",
                      state: "washington"
                  },
                  skillSet: [
                      "memes"
                  ]
              }
          ],
          skills: [
              {
                  _id: "58862bb83c085df2aaf099ce",
                  createdAt: "2017-01-23T16:13:44.096Z",
                  skillSet: [
                      "sarcasm",
                      "drinking"
                  ]
              }
          ]
        }, done);


    });
  });
