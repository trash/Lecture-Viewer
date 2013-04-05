'use strict';

angular.module('lectureApp', ['ui','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lectures', {
        templateUrl: 'views/select-lecture.html',
        controller: 'SelectLectureCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
