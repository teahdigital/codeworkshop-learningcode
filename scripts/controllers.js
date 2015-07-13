(function () {
'use strict';
   angular.module('appControllers')

	.controller('headerCtrl', ['$scope', '$location', function($scope, $location){
       console.log('headerCtrl :: OK');

       	$scope.isActive = function (path) { 
    	    return path === $location.path();
        }
	}])

   	.controller('homeCtrl', ['$scope', function($scope){
       	console.log('homeCtrl :: OK');
   	}])

   	.controller('featureCtrl', ['$scope', function($scope){
       	console.log('featureCtrl :: OK');
   	}]);

})();