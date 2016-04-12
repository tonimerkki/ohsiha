'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
{
  'title': 'Things',
  'state': 'things'
},
{
  'title': 'Bikes',
  'state': 'bikes'
}];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('ohsihaApp')
  .controller('NavbarController', NavbarController);
