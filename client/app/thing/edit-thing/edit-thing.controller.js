'use strict';
(function(){

class EditThingComponent {
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
  save() {
    this.$http.put('api/things/' + this.$stateParams.thingId, this.data);
    this.$state.go('things');
  }
  cancel() {
    this.$state.go('things');
  }
}

angular.module('ohsihaApp')
  .component('editThing', {
    templateUrl: 'app/thing/edit-thing/edit-thing.html',
    controller: EditThingComponent
  });

})();
