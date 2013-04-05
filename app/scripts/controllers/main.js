'use strict';

angular.module('lectureApp')
.controller('MainCtrl', function ($scope) {
	var $pop = Popcorn("#video");

	$scope.showNotes = true;

	$scope.images = [
		{
			'src': 'http://i.imgur.com/1vtt9kD.gif'
		},
		{
			'src': 'http://i.imgur.com/rTzKP.gif'
		},
		{
			'src': 'http://i.imgur.com/H0xRO.gif'
		},
		{'src': "http://i.imgur.com/nWRgi.gif"},
		{'src': "http://i.imgur.com/t59fs.gif"},
		{'src': "http://i.imgur.com/7Qgpf.gif"},
		{'src': "http://i.imgur.com/ns8f5.gif"},
		{'src': "http://i.imgur.com/TvOeA.gif"},
		{'src': "http://i.imgur.com/2nK30.gif"},
		{'src': "http://i.imgur.com/gKKbO.gif"},
		{'src': "http://i.imgur.com/Rhbx3.gif"},
		{'src': "http://i.imgur.com/Q2ehm.gif"},
		{'src': "http://i.imgur.com/l3f08.gif"},
		{'src': "http://i.imgur.com/poUrb.gif"},
		{'src': "http://i.imgur.com/VNHsi.gif"},
		{'src': "http://i.imgur.com/nWA8K.gif"},
		{'src': "http://i.imgur.com/XU8R8.gif"},
		{'src': "http://i.imgur.com/pbhgB.gif"},
		{'src': "http://i.imgur.com/LnpVg.gif"},
		{'src': "http://i.imgur.com/U6hJx.gif"},
		{'src': "http://i.imgur.com/7dB1u.gif"},
		{'src': "http://i.imgur.com/rKADe.gif"},
		{'src': "http://i.imgur.com/nWWd9.gif"},
		{'src': "http://i.imgur.com/iyhsU.gif"},
		{'src': "http://i.imgur.com/jHcNl.gif"},
		{'src': "http://i.imgur.com/tbHyd.gif"},
		{'src': "http://i.imgur.com/uXQtM.gif"}
	];

	$scope.$evalAsync(function () {
		for (var i = 1; i < 26; i++) {
			var link = 'http://placehold.it/150&text='+i;
			$scope.images2.push({'src': link});
		}
	}
	);

	$scope.images2 = [
	];

	$scope.noteInput = null;

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

	$scope.clickImage = function (idx) {
		var time = idx * 200;
		$pop.currentTime(time);

		//var image = $scope.images[idx];
		//$pop.currentTime(image.time);
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
