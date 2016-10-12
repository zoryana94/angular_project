'use strict';

var angular = require('angular');

angular.
  module('albumList').
  component('albumList', {
    templateUrl: 'album-list/album-list.template.html',
    controller: ['$scope', 'Album', function($scope, Album) {
      Album.success(function(data) {
        $scope.albumsData = data;
      });
    }]
  });

module.exports = albumList;
