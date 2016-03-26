'use strict';

describe('Component: ThingsComponent', function () {

  // load the controller's module
  beforeEach(module('ohsihaApp'));

  var ThingsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ThingsComponent = $componentController('things', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
