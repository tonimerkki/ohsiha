'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var bikeCtrlStub = {
  index: 'bikeCtrl.index',
  show: 'bikeCtrl.show',
  create: 'bikeCtrl.create',
  update: 'bikeCtrl.update',
  destroy: 'bikeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var bikeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './bike.controller': bikeCtrlStub
});

describe('Bike API Router:', function() {

  it('should return an express router instance', function() {
    bikeIndex.should.equal(routerStub);
  });

  describe('GET /api/bikes', function() {

    it('should route to bike.controller.index', function() {
      routerStub.get
        .withArgs('/', 'bikeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/bikes/:id', function() {

    it('should route to bike.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'bikeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/bikes', function() {

    it('should route to bike.controller.create', function() {
      routerStub.post
        .withArgs('/', 'bikeCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/bikes/:id', function() {

    it('should route to bike.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'bikeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/bikes/:id', function() {

    it('should route to bike.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'bikeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/bikes/:id', function() {

    it('should route to bike.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'bikeCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
