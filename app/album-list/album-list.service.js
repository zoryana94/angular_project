'use strict';

var angular = require('angular');

angular.
module('albumList').
factory('Album', ['$http', function($http) {
  return $http.get('http://localhost:3000/albums.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);

module.exports = Album;
