'use strict';

var angular = require('angular');
angular.module('albumList', require('./album-list.module.js'));
angular.module('albumList').component('albumList', require('./album-list.component.js'));
angular.module('albumList').service('Album', require('./album-list.service.js'));
