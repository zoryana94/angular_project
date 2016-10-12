'use strict';

var angular = require('angular');

angular.module('angularApp', [
  'albumList',
  'ngRoute'
]);

require('./app.config.js');
require('./album-list');
