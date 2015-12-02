(function() {
  'use strict';
  angular
    .module('Search')
    .factory('SearchFactory', function($http, moment, _) {

      var getTracked = function() {
        var url = "http://sky-net.herokuapp.com/collections/trackVenues";
        return $http.get(url);
      }

      var getBand = function(artist) {
        var url = "/searchBands/" + artist;
        return $http.get(url);
      };

      var trackVenue = function(newVenue) {
        var url = "http://sky-net.herokuapp.com/collections/trackVenues";
        return $http.post(url, newVenue);
      };

      return {
        getBand: getBand,
        trackVenue: trackVenue,
        getTracked: getTracked
      };

    })
    // .factory('annyangFactory', function($http) {
    //
    //   var url ='http://tiny-tiny.herokuapp.com/collections/findstuff';
    //
    //   var getData = function() {
    //     return $http.get(url);
    //   };

      // var test = function()  {
      //     if (annyang) {
      //     var commands = {
      //       'show test': function() {
      //         console.log("show test");
      //       }
      //     };
      //
      //     annyang.addCommands(commands);
      //
      //     annyang.start();
      //   }
      //};

    //   return {
    //     getData: getData,
    //   };
    //
    // });

}());
