'use strict';

angular.module('lectureApp')
.controller('SelectLectureCtrl', function ($scope) {
  	$scope.pageSize = 6;
  	$scope.numberOfPages = function () {
        return Math.ceil($scope.lectures.length/$scope.pageSize);                
      }
  	$scope.currentPage = 0;

      $scope.profMap = {};
      $scope.professors = [];
      $scope.lectures = [
            {
            	"title": 'Lecture 1',
                  'class': 'CS666',
            	"professor": 'that guy',
            	"date": '9/12/9234',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 2',
                  'class': 'CS666',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 3',
                  'class': 'CS666',
            	"professor": 'guy mchenderson',
            	"date": '8/34/2342',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 4',
                  'class': 'CS666',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 5',
                  'class': 'CS666',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 6',
                  'class': 'CS666',
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
                  'class': 'CS666',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 9',
                  'class': 'CS666',
            	"professor": 'guy mchenderson',
            	"date": '8/34/2342',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 10',
                  'class': 'CS666',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 1',
                  'class': 'CS1337',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 2',
                  'class': 'CS1337',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 3',
                  'class': 'CS1337',
            	"professor": 'that guy',
            	"date": '9/12/9234',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 4',
                  'class': 'CS1337',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 5',
                  'class': 'CS1337',
            	"professor": 'guy mchenderson',
            	"date": '8/34/2342',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 6',
                  'class': 'CS1337',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 7',
                  'class': 'CS1337',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 8',
                  'class': 'CS1337',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 9',
                  'class': 'CS1337',
            	"professor": 'that guy',
            	"date": '9/12/9234',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 10',
                  'class': 'CS1337',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 1',
                  'class': 'CS101',
            	"professor": 'guy mchenderson',
            	"date": '8/34/2342',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 2',
                  'class': 'CS101',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 3',
                  'class': 'CS101',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 4',
                  'class': 'CS101',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 5',
                  'class': 'CS101',
            	"professor": 'that guy',
            	"date": '9/12/9234',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 6',
                  'class': 'CS101',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 7',
                  'class': 'CS101',
            	"professor": 'guy mchenderson',
            	"date": '8/34/2342',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 8',
                  'class': 'CS101',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 9',
                  'class': 'CS101',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
            {
            	"title": 'Lecture 10',
                  'class': 'CS101',
            	"professor": 'nother guy',
            	"date": '8/23/2343',
            	'image': 'http://placehold.it/300x200'
            },
      ];
      //takes a property of a lecture (professor, title) and returns a non-repeating list of it's values for lectures
      var typeaheadList = function (property) {
            var hashMap = {};
            var list = [];
            //create a ghetto hashmap to get individual professors
            for (var i=0; i < $scope.lectures.length; i++) {
                  hashMap[$scope.lectures[i][property]] = 1;
            }
            //put professor names into a list for typeahead
            for (var prop in hashMap) {
                  list.push(prop);
            }
            return list;
      }
      $scope.professors = typeaheadList('professor');
      $scope.classes = typeaheadList('class');
      $scope.titles = typeaheadList('title');
      $scope.lectureSearch = '';
});
