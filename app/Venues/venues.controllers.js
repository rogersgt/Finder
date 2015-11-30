(function() {
  'use strict';
  angular
    .module('Venues')
    .controller('VenueController', function($scope, VenueFactory, TrackFactory) {
/////////// get inidvidual venue /////////////////
      $scope.searchVenues = function(venue) {
        var venueID = venue.multipleSelect;
        VenueFactory.getVenue(venueID).success(function(data) {
          $scope.tVen = data;
        });
      }

////////// get city venues ////////////////
      var getCityVen = function() {
        VenueFactory.cityVen().success(function(data) {
          $scope.venues = data;
        });
      };

      getCityVen();

///////// get tracked venues ////////////////
      var getVen = function() {
        TrackFactory.getTrackedVenues().success(function(data) {
          $scope.trackedVenues = data;
        });
      }

      getVen();

      $scope.trackVenue = function(newVenue) {
        TrackFactory.venue(newVenue).success(function(data) {
        });
      }

      $scope.untrack = function(venue) {
        TrackFactory.deleteItem(venue);
      }


    });


}());
