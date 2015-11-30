(function() {
  'use strict';
  angular
    .module('Search')
    .controller('SearchController', function($scope, SearchFactory) {

      $scope.searchBand = function(artist) {
        var name = artist.name;
        SearchFactory.getBand(name).success(function(data) {
          $scope.data = data;
          console.log(data);
        });
      }

      $scope.addVenue = function(band) {
        var venue = band.venue;
        SearchFactory.trackVenue(venue);
      }


    });


}());
