'use strict';

angular.module('ohsihaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('visualization', {
        url: '/visualization',
        template: '<visualization></visualization>'
      });
  });
