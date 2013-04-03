'use strict';

angular.module('lectureApp', ['ui','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fat', {
        templateUrl: 'views/fat.html',
        controller: 'FatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
