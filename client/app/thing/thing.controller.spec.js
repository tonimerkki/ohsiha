'use strict';

describe('Component: thing', function () {

  // load the controller's module
  beforeEach(module('ohsihaApp'));

  var ThingComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ThingComponent = $componentController('thing', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
