(function(){
    'use strict';

    var app = angular.module('learningcode', ['ngRoute', 'appControllers']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider

        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'homeCtrl'
        })

        .when('/feature', {
            templateUrl : 'views/feature.html',
            controller  : 'featureCtrl'
        })

        .otherwise({
            redirectTo:'/'
        });
    }]);

    angular.module('appControllers', []);

})();