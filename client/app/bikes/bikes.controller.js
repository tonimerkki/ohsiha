'use strict';
(function(){

class BikesComponent {
  constructor($http, socket, $scope, $filter) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.info = [];
    this.stationInformation = [];
    this.$filter = $filter;
    this.fullStationData = [];
  }

  $onInit() {

    var stationData = [];
    this.$http.get('https://gbfs.citibikenyc.com/gbfs/en/station_status.json').then(response => {
      this.data = response.data.data.stations;
      var that = this;

      this.$http.get('https://gbfs.citibikenyc.com/gbfs/en/station_information.json').then(response => {
        this.stationInformation.push(response.data.data.stations);
        this.stationInformation = response.data.data.stations;
        stationData = response.data.data.stations;
        stationData.push(response.data.data.stations);
        this.data.forEach(function(item){
          var name = that.$filter('filter')(stationData, {station_id: item.station_id})[0];
          that.fullStationData.push({'id' : item.station_id, 'name' : name.name, 'availableBikes': item.num_bikes_available, 'availableDocks': item.num_docks_available});
        });
        console.log(that.fullStationData);

        this.$http({
            url: '/api/bikes',
            method: 'POST',
            data: that.fullStationData
          }).then(function(response) {
            // success
            //console.log(response);

            //console.log(response.data);
          },
          function(response) { // optional
            // failed
          //  console.log(response);
          });
      });

    /*  */
/*
      this.data.forEach(function(item){
        that.$http({
          url: '/api/bikess',
          method: 'POST',
          data: { 'id' : item.station_id, 'availableBikes': item.num_bikes_available, 'availableDocks': item.num_docks_available }
        })
        .then(function(response) {
          // success
          //console.log(response);
          that.info.push(response.data);

          //console.log(response.data);
        },
        function(response) { // optional
          // failed
        //  console.log(response);
        });
      }); */




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
