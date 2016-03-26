'use strict';

angular.module('ohsihaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('things', {
        url: '/things',
        template: '<things></things>'
      });
  });
