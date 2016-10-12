'use strict';

var angular = require('angular');

module.exports = angular.
  module('angularApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/albums', {
          template: '<album-list></album-list>'
        }).
        otherwise('/albums');
    }
  ]);
