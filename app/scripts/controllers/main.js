'use strict';

//THIS IS THE CONTROLLER FOR THE LECTURE VIEWING PAGE

angular.module('lectureApp')
.controller('MainCtrl', function ($scope, $rootScope) {
	//declare the popcorn object
	var $pop = Popcorn("#video");
	$pop.play();

	$scope.showNotes = true;

	$scope.images = [
	];
	$scope.images2 = [
	];

	//Hack to fill list $scope.images2 with placeholder images
	$scope.$evalAsync(function () {
		for (var i = 1; i < 26; i++) {
			var link = 'http://placehold.it/150&text='+i;
			$scope.images2.push({'src': link});
		}
	}
	);

	$scope.noteInput = null;

	//list of notes already stored
	$scope.notes = [
		{
			'time': 1,
			'content': "This note corresponds to second 1."
		},
		{
			'time': 3,
			'content': "I'm all about second 3."
		},
		{
			'time': 4,
			'content': "What's good, second 4?"
		},
		{
			'time': 5,
			'content': "Second 5 is the best!"
		},
		{
			'time': 20,
			'content': "This application sure is great!"
		}
	];

	$scope.alerts = [
		//stores alerts
	];


	$scope.logThis = function () {
		var text = $scope.searchText;
		$scope.searchText = '';
		
	};

	//Changes the time of the movie to 200 seconds times the index of the image
	//This should be changes to all a time attribute associated with the image
	$scope.clickImage = function (idx) {
		var time = idx * 200;
		$pop.currentTime(time);

		//FUTURE CODE EXAMPLE (using time associated with slide object in slides list)
		//$pop.currentTime($scope.slides[idx].time)
	};

	$scope.addAlert = function (alert) {
		$scope.alerts.push({msg: alert.msg, type: alert.type});
	};

	$scope.closeAlert = function (index) {
		$scope.alerts.splice(index, 1);
	};

	$scope.addNote = function(event) {
		event.preventDefault();
		var newNote = {
			'time': Math.floor($pop.currentTime()),
			'content': $scope.noteInput
		}
		$scope.noteInput = '';
		$scope.notes.push(newNote);
		$scope.alerts.push({
			'msg': 'Note added.',
			'type': 'info'
		});
	};
});
