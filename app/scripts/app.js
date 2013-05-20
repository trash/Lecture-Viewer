'use strict';

//This is the angular app declaration that handles coupling views with controllers, routing, and modules

angular.module('lectureApp', ['ui','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/select-lecture.html',
        controller: 'SelectLectureCtrl'
      })
      .when('/watch/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
