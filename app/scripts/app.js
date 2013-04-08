'use strict';

angular.module('lectureApp', ['ui','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/select-lecture.html',
        controller: 'SelectLectureCtrl'
      })
      .when('/watch/:lecture', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lectures', {
        templateUrl: 'views/select-lecture.html',
        controller: 'SelectLectureCtrl'
      })
      .when('/splash', {
        templateUrl: 'views/splash.html',
        controller: 'SplashCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
