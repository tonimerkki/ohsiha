'use strict';
(function(){

class BikesComponent {
  constructor($http, socket, $scope) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope
  }

  $onInit() {
    this.$http.get('http://www.citibikenyc.com/stations/json').then(response => {
      this.data = response.data;
    });
  }
}

angular.module('ohsihaApp')
  .component('bikes', {
    templateUrl: 'app/bikes/bikes.html',
    controller: BikesComponent
  });

})();
