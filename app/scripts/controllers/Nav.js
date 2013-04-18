'use strict';

angular.module('lectureApp')
  .controller('NavCtrl', function ($scope, lecture) {
    $scope.currentUser = lecture.currentUser();
  });
