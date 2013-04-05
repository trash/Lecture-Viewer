'use strict';

angular.module('lectureApp')
  .controller('SelectLectureCtrl', function ($scope) {
  	$scope.pageSize = 6;
  	$scope.numberOfPages = function () {
        return Math.ceil($scope.lectures.length/$scope.pageSize);                
    }
  	$scope.currentPage = 0;
    $scope.lectures = [
      {
      	"title": 'Lecture 1',
      	"professor": 'that guy',
      	"date": '9/12/9234',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 2',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 3',
      	"professor": 'guy mchenderson',
      	"date": '8/34/2342',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 4',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 5',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 6',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 7',
      	"professor": 'that guy',
      	"date": '9/12/9234',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 8',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 9',
      	"professor": 'guy mchenderson',
      	"date": '8/34/2342',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 10',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 11',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 12',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 13',
      	"professor": 'that guy',
      	"date": '9/12/9234',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 14',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 15',
      	"professor": 'guy mchenderson',
      	"date": '8/34/2342',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 16',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 17',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 18',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 19',
      	"professor": 'that guy',
      	"date": '9/12/9234',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 20',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 21',
      	"professor": 'guy mchenderson',
      	"date": '8/34/2342',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 22',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 23',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 24',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 25',
      	"professor": 'that guy',
      	"date": '9/12/9234',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 26',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 27',
      	"professor": 'guy mchenderson',
      	"date": '8/34/2342',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 28',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 29',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 30',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 1',
      	"professor": 'that guy',
      	"date": '9/12/9234',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 31',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 32',
      	"professor": 'guy mchenderson',
      	"date": '8/34/2342',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 33',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 34',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },
      {
      	"title": 'Lecture 35',
      	"professor": 'nother guy',
      	"date": '8/23/2343',
      	'image': 'http://placehold.it/300x200'
      },

    ];

    $scope.lectureSearch = '';
  });
