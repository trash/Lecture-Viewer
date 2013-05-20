'use strict';

//This filter is a hack used to turn a boolean into either 'right' or 'left'
//used for display purposes only

angular.module('lectureApp')
  .filter('noteDirection', function () {
    return function (input) {
    	if (input)
    		return 'right'
    	else
    		return 'left'
    };
  });
