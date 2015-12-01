(function() {
  'use strict';
  angular
    .module('Venues')
    .controller('VenueController', function($scope, VenueFactory, TrackFactory) {
      var vm = this;
/////////// get inidvidual venue /////////////////
      vm.searchVenues = function(venue) {
         var venueID = venue.multipleSelect;
        VenueFactory.getVenue(venueID).success(function(data) {
          vm.tVen = data;
        });
      }

////////// get city venues ////////////////
      var getCityVen = function() {
        VenueFactory.cityVen().success(function(data) {
          vm.venues = data;
        });
      };

      getCityVen();

///////// get tracked venues ////////////////
      var getVen = function() {
        TrackFactory.getTrackedVenues().success(function(data) {
          vm.trVenues = data;
        });
      }

      getVen();

      vm.trackVenue = function(show) {
        TrackFactory.getTrackedVenues().success(function(data) {
          var names = [];
          function check() {
            for (var i = 0; i < data.length; i++) {
              names.push(data[i].id);
            }
          }
          check();
          if (!_.contains(names, show.venue.id)) {
            TrackFactory.venue(show.venue);
          }
        });
      }

      vm.untrack = function(venue) {
        TrackFactory.getTrackedVenues().success(function(data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].id === venue.id) {
              var targetId = data[i]._id;
            }
          }
          TrackFactory.deleteItem(targetId);
        
        });
      }


    });


}());
