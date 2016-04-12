'use strict';

var app = require('../..');
import request from 'supertest';

var newBike;

describe('Bike API:', function() {

  describe('GET /api/bikes', function() {
    var bikes;

    beforeEach(function(done) {
      request(app)
        .get('/api/bikes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bikes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      bikes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/bikes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/bikes')
        .send({
          name: 'New Bike',
          info: 'This is the brand new bike!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBike = res.body;
          done();
        });
    });

    it('should respond with the newly created bike', function() {
      newBike.name.should.equal('New Bike');
      newBike.info.should.equal('This is the brand new bike!!!');
    });

  });

  describe('GET /api/bikes/:id', function() {
    var bike;

    beforeEach(function(done) {
      request(app)
        .get('/api/bikes/' + newBike._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bike = res.body;
          done();
        });
    });

    afterEach(function() {
      bike = {};
    });

    it('should respond with the requested bike', function() {
      bike.name.should.equal('New Bike');
      bike.info.should.equal('This is the brand new bike!!!');
    });

  });

  describe('PUT /api/bikes/:id', function() {
    var updatedBike;

    beforeEach(function(done) {
      request(app)
        .put('/api/bikes/' + newBike._id)
        .send({
          name: 'Updated Bike',
          info: 'This is the updated bike!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBike = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBike = {};
    });

    it('should respond with the updated bike', function() {
      updatedBike.name.should.equal('Updated Bike');
      updatedBike.info.should.equal('This is the updated bike!!!');
    });

  });

  describe('DELETE /api/bikes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/bikes/' + newBike._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when bike does not exist', function(done) {
      request(app)
        .delete('/api/bikes/' + newBike._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
