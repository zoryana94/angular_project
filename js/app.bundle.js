webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('angularApp', [
	  'albumList',
	  'ngRoute'
	]);

	__webpack_require__(3);
	__webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	angular.module('albumList', __webpack_require__(5));
	angular.module('albumList').component('albumList', __webpack_require__(6));
	angular.module('albumList').service('Album', __webpack_require__(7));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('albumList', []);

	module.exports = albumList;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ }
]);