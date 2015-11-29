(function() {
  'use strict';
  angular
    .module('Search')
    .controller('SearchController', function($scope, SearchFactory) {

      $scope.search = function() {
        console.log("try");
        SearchFactory.getData().success(function(data) {
          $scope.data = data;
          console.log(data[0].artists[0].name);
        });
      }


    });


}());
