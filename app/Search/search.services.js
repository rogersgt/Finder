(function() {
  'use strict';
  angular
    .module('Search')
    .factory('SearchFactory', function($http, moment, _) {

      //var url = "http://api.bandsintown.com/artists/Dempsey/events.json?api_version=2.0&app_id=findstuff?callback=JSON_CALLBACK";
      var url = "/search";



      var getData = function() {
        return $http.get(url);
      };

      return {
        getData: getData
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
