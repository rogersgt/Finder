(function() {
  'use strict';
  angular
    .module('Search')
    .controller('SearchController', function($scope, SearchFactory, _) {

      var vm = this;

      vm.searchBand = function(artist) {
        var name = artist.name;
        SearchFactory.getBand(name).success(function(data) {
          vm.shows = data;
        }).success(function(shows) {
          SearchFactory.getTracked().success(function(tracked) {
            vm.isTracked(tracked);
          })
        });
      }
      vm.isTracked = function (trackedArr) {
        //console.log(vm.shows[0].venue);
        //console.log(tracked);
        for (var i = 0; i < vm.shows.length; i ++) {
          //console.log(vm.shows[i].venue.id);
          for (var fo in trackedArr) {
          //  console.log(tracked[fo]);
          if (vm.shows[i].venue.id === trackedArr[fo].id) {
             console.log(vm.shows[i].venue);
             vm.shows[i].tracking = true;

          } else {

          }
          }
        }
      }

      vm.addVenue = function(show) {
        SearchFactory.getTracked().success(function(data) {
          var names = [];
          function check() {
            for (var i = 0; i < data.length; i++) {
              names.push(data[i].id);
            }
          }
          check();
          if (!_.contains(names, show.venue.id)) {
            SearchFactory.trackVenue(show.venue);
          }
        });
      }

      vm.checkForTracked = function(venue) {
        SearchFactory.getTracked().success(function(data) {
          var id = [];
          for (var i = 0; i < data.length; i++) {
            id.push(data[i].id);
          }
          if (_.contains(id, venue.id)) {
            venue.track = "tracking";
          } else {
            venue.track = ""
          }
        });
      }

      vm.test = function() {
        SearchFactory.getTracked().success(function(data) {
          console.log(data);
        });
      }


    });


}());
