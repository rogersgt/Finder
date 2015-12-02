(function() {
  'use strict';
  angular
    .module('Venues')
    .directive('venueShow', function() {
      return {
        restrict: 'E',
        templateUrl: 'Venues/views/venues.directives.html',
        scope: {
          show: '='
        },
        link: function(scope, element, attributes){

        }
      };
    })
    .directive('trackedVenue', function() {
      return {
        restrict: 'E',
        templateUrl: 'Venues/views/TVdirectives.html',
        scope: {
          show: '='
        },
        link: function(scope, element, attributes) {

        }
      }
    });


}());
