'use strict';

angular.
  module('core.car').
  factory('car', ['$resource',
    function($resource) {
      return $resource('cars/:carId.json', {}, {
        query: {
          method: 'GET',
          params: {carId: 'cars'},
          isArray: true
        }
      });
    }
  ]).
  filter('startFrom', function() {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);
      }
  });
