'use strict';

angular.module('ohsihaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thing', {
        url: '/thing/:thingId',
        template: '<thing></thing>'
      });
  });
