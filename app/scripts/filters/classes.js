'use strict';

//This filter takes a list of classes, classes, and a user's registered classes, userClasses, and returns an filtered list of classes that match userClasses

angular.module('lectureApp')
  .filter('classes', function () {
    return function (classes, userClasses) {
    	//default to show all classes if not logged (because we're just demoing the user-class filtering feature)
    	if (userClasses === undefined)
    		return classes;
    	var filteredClasses =[];
    	for (var i=0; i < classes.length; i++) {
    		for (var j=0; j < userClasses.length; j++) {
    			if (classes[i].class === userClasses[j]) {
    				filteredClasses.push(classes[i]);
    			}
    		}
    	}
      return filteredClasses;
    };
  });
