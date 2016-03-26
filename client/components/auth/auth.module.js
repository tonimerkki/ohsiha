'use strict';

angular.module('ohsihaApp.auth', [
  'ohsihaApp.constants',
  'ohsihaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
