(function() {
  'use strict';
  angular
    .module('Venues')
    .factory('VenueFactory', function($http, moment, _) {

      var getVenue = function(venueID) {
        var url = "/searchVenues/" + venueID;
        return $http.get(url);
      };

      // get one tracked venue ///
      var getOneVen = function(venueID) {
        var url = "http://tiny-tiny.herokuapp.com/collections/trackVenues/" + venueID;
        return $http.get(url);
      }

      var cityVen = function() {
        var url = "http://tiny-tiny.herokuapp.com/collections/charlestonVenues";
        return $http.get(url);
      }


      return {
        getVenue: getVenue,
        getOneVen: getOneVen,
        cityVen: cityVen
      };

    })
    .factory('TrackFactory', function($http, moment, _) {

      var url = "http://tiny-tiny.herokuapp.com/collections/trackVenues";

      var getTrackedVenues = function() {
        return $http.get(url);
      };

      var venue = function(newVenue) {
        return $http.post(url, newVenue);
      };

      var deleteItem = function(venue) {
        console.log(venue);
        // var venueID = venue.id;
        // var url = "http://tiny-tiny.herokuapp.com/collections/trackVenues/" + venueID;
        // $http.delete(url);
      }

      return {
        venue: venue,
        getTrackedVenues: getTrackedVenues,
        deleteItem: deleteItem
      };

    })

}());
