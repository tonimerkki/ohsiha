'use strict';

describe('Component: BikesComponent', function () {

  // load the controller's module
  beforeEach(module('ohsihaApp'));

  var BikesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BikesComponent = $componentController('BikesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
