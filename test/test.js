// "use strict";
// //THESE ARE ROUTE TESTS FROM GALVANIZE MESSAGE
//
// process.env.NODE_ENV = 'test';
//
// const { suite, test } = require('mocha');
// const request = require('supertest');
// const knex = require('../knex');
// const server = require('../server');
//
// suite('Part 3: CRUD routes for messages resource should be created.', () => {
//
//   before((done) => {
//   knex.migrate.latest()
//     .then(() => {
//       done();
//     })
//     .catch((err) => {
//       done(err);
//     });
//   });
//
//   beforeEach((done) => {
//     knex.seed.run()
//       .then(() => {
//         done();
//       })
//       .catch((err) => {
//         done(err);
//       });
//   });
//
//   test('GET /messages should return the id,name,and message of all messages.', (done) => {
//     /* eslint-disable max-len */
//     request(server)
//       .get('/messages')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, [{
//         id:1,
//         name:'Criminal',
//         message:'What Are You?'
//       },{
//         id:2,
//         name:'Batman',
//         message:'I\'m Batman'
//       }], done);
//
//       /* eslint-enable max-len */
//   });
//
//   test('GET /messages/:id should return the id,name,and message of a single message.', (done) => {
//     /* eslint-disable max-len */
//     request(server)
//       .get('/messages/1')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, {
//         id:1,
//         name:'Criminal',
//         message:'What Are You?'
//       }, done);
//
//       /* eslint-enable max-len */
//   });
//
//   test('POST /messages should create a new message and return the name and message that were created.', (done) => {
//   /* eslint-disable max-len */
//   request(server)
//     .post('/messages')
//     .set('Accept', 'application/json')
//     .send({
//       name:'Batman',
//       message:'To the Batcave!'
//     })
//     .expect('Content-Type', /json/)
//     .expect((res) => {
//       delete res.body.createdAt;
//       delete res.body.updatedAt;
//     })
//     .expect(200, {
//       name:'Batman',
//       message:'To the Batcave!'
//     }, done);
//
//     /* eslint-enable max-len */
//   });
//
//   test('PATCH /messages/:id should update a message and return the name and message that were updated.', (done) => {
//   /* eslint-disable max-len */
//   request(server)
//     .patch('/messages/1')
//     .set('Accept', 'application/json')
//     .send({
//       name:'Criminal',
//       message:'Who Are You?'
//     })
//     .expect('Content-Type', /json/)
//     .expect((res) => {
//       delete res.body.createdAt;
//       delete res.body.updatedAt;
//     })
//     .expect(200, {
//       id:1,
//       name:'Criminal',
//       message:'Who Are You?'
//     }, done);
//
//     /* eslint-enable max-len */
//   });
//
//   test('DELETE /messages/:id should delete a message and return the id,name, and message that were deleted.', (done) => {
//     /* eslint-disable max-len */
//     request(server)
//       .del('/messages/2')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect((res) => {
//         delete res.body.createdAt;
//         delete res.body.updatedAt;
//       })
//       .expect(200, {
//         id: 2,
//         name:'Batman',
//         message:'I\'m Batman'
//       }, done);
//
//       /* eslint-enable max-len */
//   });
//
// });
