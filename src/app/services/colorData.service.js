(function() {

    'use strict';

	function ColorData () {
	 	
        var data = [
            {
                color: 'pink'
            },
            {
                color: 'teal'
            },
            {
                color: 'lime'
            },
            {
                color: 'amber'
            },
            {
                color: 'deep-purple'
            },
            {
                color: 'blue-grey'
        }];

	 	var factory = {
	 		getData: function() {
	 			return data;
	 		}
	 	};
	 	
	 	return factory;
	}
	   	
	angular
		.module('app.note')
		.factory('ColorData', ColorData);
})();