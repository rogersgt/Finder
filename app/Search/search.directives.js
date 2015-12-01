(function() {
  'use strict';
  angular
    .module('Search')
    .directive('searchShow', ['SearchFactory', function(SearchFactory) {
      return {
        restrict: 'E',
        templateUrl: 'Search/views/search.directives.html',
        scope: {
          show: '='
        },
        link: function(scope, element, attributes){
          var searchBand = function(show) {
            //console.log(show);
            // var name = artist.name;
            // SearchFactory.getBand(name).success(function(data) {
            //   vm.shows = data;
            // }).success(function(shows) {
            //   SearchFactory.getTracked().success(function(tracked) {
            //     //console.log(vm.shows[0].venue);
            //     //console.log(tracked);
            //     for (var i = 0; i < vm.shows.length; i ++) {
            //       //console.log(vm.shows[i].venue.id);
            //       for (var fo in tracked) {
            //       //  console.log(tracked[fo]);
            //       if (vm.shows[i].venue.id === tracked[fo].id) {
            //         element(document).find('tracking-view').text("tracking");
            //       } else {
            //
            //       }
            //       }
            //     }
            //   })
            // });
          }
          searchBand();
        }
      };
    }])
    .directive('searchBand', function() {
      return {
        retrict: 'E',
        templateUrl: 'Search/views/searchform.html',
        link: function(scope, element, attributes) {
          element.on('submit', function(evt) {
            element.find('input').val("");
          });
        }
      }
    })
    .directive('trackingView', function() {
      return {
        restrict: 'E',
        templateUrl: 'Search/views/trackingview.html',
        link: function(scope, element, attributes) {

        }
      };
    })

}());
