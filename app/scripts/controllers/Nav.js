'use strict';

//THIS IS THE CONTROLLER FOR THE NAVBAR

angular.module('lectureApp')
  .controller('NavCtrl', function ($scope, lecture) {
  	//this should allow us to display the currentUser in the nav but lecture.currentUser() isn't updating this controller when changed
    $scope.currentUser = lecture.currentUser();
  });
