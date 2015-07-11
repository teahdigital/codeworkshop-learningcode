(function () {
 'use strict';
    
    angular.module('appServices')

    .factory('Styles', function() {
    	var data = {};

		data.navHeight = function(){
    		$('nav').css({ height: $('#view').height() });
		}

		return data();
	});

})();