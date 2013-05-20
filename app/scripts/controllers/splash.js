'use strict';

//THIS IS THE CONTROLLER FOR THE SPLASH/LOGIN PAGE/VIEW

angular.module('lectureApp')
  .controller('SplashCtrl', function ($scope, $location, lecture) {
  	$scope.errorText = '';
  	$scope.email = '';
  	$scope.password = '';
  	$scope.currentUser = lecture.currentUser();
    
    $scope.login = function () {
    	if (lecture.login($scope.email, $scope.password)) {
    		$scope.errorText = '';
    		$location.path('/lectures');
    	}
    	else {
    		$scope.errorText = 'The email or password seems to be incorrect.'
    	}
    }
    $scope.logout = function () {
    	lecture.logout();
    	$scope.currentUser = lecture.currentUser();
    }
  });
