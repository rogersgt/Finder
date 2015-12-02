(function () {
  "use strict";

  angular
    .module('FindStuff', [
      'ngRoute',
      'underscore',
      'moment',
      'Search',
      'Venues'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', { redirectTo: '/trackedVenues'})
        .when('/404', {
          template: 'common/views/404.html'
        })
        .otherwise({ redirectTo: '/404'});
    });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
  angular
    .module('moment', [])
    .factory('moment', function ($window) {
      return $window.moment;
    });




})();
