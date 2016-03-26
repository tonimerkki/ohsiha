'use strict';

describe('Component: EditThingComponent', function () {

  // load the controller's module
  beforeEach(module('ohsihaApp'));

  var EditThingComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EditThingComponent = $componentController('editThing', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
