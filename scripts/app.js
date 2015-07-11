(function(){
	'use strict';

	var app = angular.module('learningcode', ['ngRoute', 'appControllers']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl : 'views/home.html',
			controller  : 'homeCtrl'
		})

		.when('/learn/:course', {
			templateUrl : 'views/course.html',
			controller  : 'learnCtrl'
		})

		.otherwise({
			redirectTo:'/'
		});
	}]);

	angular.module('appControllers', []);

})();