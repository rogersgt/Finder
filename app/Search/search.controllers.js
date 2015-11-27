(function() {
  'use strict';
  angular
    .module('Search')
    .controller('SearchController', function($scope, SearchFactory) {

      $scope.search = function() {
        console.log("try");
        SearchFactory.getData().success(function(data) {
          console.log(data);
          console.log("success");
        });
      }


    });


}());
