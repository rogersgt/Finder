(function() {
  'use strict';
  angular
    .module('Venues', [
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
      .when('/Charleston', {
        templateUrl: 'Venues/views/venues.html',
        controller: 'VenueController'
      })
      .when('/trackedVenues', {
        templateUrl: 'Venues/views/trackedVenues.html',
        controller: 'VenueController'
      })

    });

}());
