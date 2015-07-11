(function () {
 'use strict';
    
    angular.module('appControllers')

    .controller('headerCtrl', ['$scope', '$location', function($scope, $location){
    	console.log('headerCtrl :: OK');

    	$scope.isActive = function (path) { 
		    return path === $location.path();
		}
    }])

    .controller('homeCtrl', ['$scope', 'Styles', function($scope, Styles){
    	console.log('homeCtrl :: OK');

    	Styles.navHeight();
    }])

    .controller('learnCtrl', ['$scope', '$routeParams', 'Styles', function($scope, $routeParams, Styles){
    	console.log('learnCtrl :: OK');

    	$scope.course = $routeParams.course;

    	Styles.navHeight();
    }])

    .controller('topicCtrl', ['$scope', '$routeParams', 'Styles', function($scope, $routeParams, Styles){
    	console.log('topicCtrl :: OK');

    	$scope.course = $routeParams.course;
    	$scope.topic = $routeParams.topic;

    	Styles.navHeight();
    }])

    .factory('Styles', function() {
    	var data = {};

		data.navHeight = function(){
			setTimeout(function(){
    			$('nav').css({ height: $('#view').height() });
			}, 100);
		}

		return data;
	});

})();