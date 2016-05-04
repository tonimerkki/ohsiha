'use strict';
(function(){

class VisualizationComponent {
  constructor($http, socket, $scope, $filter) {
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.info = [];
    this.stationInformation = [];
    this.$filter = $filter;
    this.fullStationData = [];
    this.flarejson = {};

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
        var data = [];
        that.fullStationData.forEach(function(station){

          data.push({
              'name': station.name,
              'children': [
                {'name': station.name, 'size': station.availableBikes }
              ]
            });
        });

        that.flarejson = {'name': 'flare',
                'children': data
                };

                    var diameter = 1200,
                        format = d3.format(",d"),
                        color = d3.scale.category20c();

                    var bubble = d3.layout.pack()
                        .sort(null)
                        .size([diameter, diameter])
                        .padding(1.5);

                    var svg = d3.select("visualization").append("svg")
                        .attr("width", diameter)
                        .attr("height", diameter)
                        .attr("class", "bubble");

                      var root = that.flarejson;
                      var node = svg.selectAll(".node")
                          .data(bubble.nodes(classes(root))
                          .filter(function(d) { return !d.children; }))
                        .enter().append("g")
                          .attr("class", "node")
                          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

                      node.append("title")
                          .text(function(d) { return d.className + ": " + format(d.value); });

                      node.append("circle")
                          .attr("r", function(d) { return d.r; })
                          .style("fill", function(d) { return color(d.packageName); });

                      node.append("text")
                          .attr("dy", ".3em")
                          .style("text-anchor", "middle")
                          .text(function(d) { return d.className.substring(0, d.r / 3); });


                    // Returns a flattened hierarchy containing all leaf nodes under the root.
                    function classes(root) {
                      var classes = [];

                      function recurse(name, node) {
                        if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
                        else classes.push({packageName: name, className: node.name, value: node.size});
                      }

                      recurse(null, root);
                      return {children: classes};
                    }

                    d3.select(self.frameElement).style("height", diameter + "px");

      });
    });
  }

  }


angular.module('ohsihaApp')
  .component('visualization', {
    templateUrl: 'app/visualization/visualization.html',
    controller: VisualizationComponent
  });

})();
