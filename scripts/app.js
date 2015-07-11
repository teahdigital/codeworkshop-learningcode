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
		.when('/learn/:course/:topic', {
			templateUrl : 'views/topic.html',
			controller  : 'topicCtrl'
		})

		.otherwise({
			redirectTo:'/'
		});
	}]);

	angular.module('appControllers', []);

})();