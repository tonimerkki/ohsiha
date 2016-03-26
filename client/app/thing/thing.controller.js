'use strict';
(function(){

class ThingComponent {
  constructor($stateParams, $http, $state) {
    this.message = 'Hello';
    this.$stateParams = $stateParams;
    this.$http = $http;
    this.$state = $state;
  }

  $onInit() {
    this.$http.get('/api/things/' + this.$stateParams.thingId).then(response => {
      this.data = response.data;
    });
  }
  deleteThing() {
    this.$http.delete('/api/things/' + this.$stateParams.thingId).then(response => {
      if (response){
        this.$state.go('things');
      }
    });

  }
  cancel() {
    this.$state.go('things');
  }
}

angular.module('ohsihaApp')
  .component('thing', {
    templateUrl: 'app/thing/thing.html',
    controller: ThingComponent
  });

})();
