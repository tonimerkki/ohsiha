'use strict';

angular.module('ohsihaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bikes', {
        url: '/bikes',
        template: '<bikes></bikes>'
      });
  });
