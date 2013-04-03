'use strict';

angular.module('lectureApp')
  .filter('noteDirection', function () {
    return function (input) {
    	if (input)
    		return 'right'
    	else
    		return 'left'
    };
  });
