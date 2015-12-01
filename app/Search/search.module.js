(function() {
  'use strict';
  angular
    .module('Search', [
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
      .when('/search', {
        templateUrl: 'Search/views/search.html',
        controller: 'SearchController as SCtrl'
      })

    });

}());
