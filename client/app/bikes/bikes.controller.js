'use strict';
(function(){

class BikesComponent {
  constructor($http, socket, $scope) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.info = [];

  }

  $onInit() {
    this.$http.get('http://www.citibikenyc.com/stations/json').then(response => {
      this.data = response.data.stationBeanList;
      //console.log(this.data[2].stationName);
      var that = this;

      this.data.forEach(function(item){
        that.$http({
          url: '/api/bikes',
          method: 'POST',
          data: { 'name' : item.stationName, 'availableDocks': item.availableDocks, 'totalDocks': item.totalDocks }
        })
        .then(function(response) {
          // success
          console.log(response);
          that.info.push(response.data);
          //console.log(response.data);
        },
        function(response) { // optional
          // failed
          console.log(response);
        });
        });



    });
  }

  showJSON(id){
    window.location = '/api/bikes/' + id;
  }
}

angular.module('ohsihaApp')
  .component('bikes', {
    templateUrl: 'app/bikes/bikes.html',
    controller: BikesComponent
  });

})();
