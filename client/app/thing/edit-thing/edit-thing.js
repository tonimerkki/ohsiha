'use strict';

angular.module('ohsihaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit-thing', {
        url: '/thing/edit/:thingId',
        template: '<edit-thing></edit-thing>'
      });
  });
