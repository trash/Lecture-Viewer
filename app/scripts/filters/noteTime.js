'use strict';

//Filter that takes a time in seconds and filters it to the format '12h34m56s'

angular.module('lectureApp')
  .filter('noteTime', function () {
    return function(time) {
    	if (time == 0)
    		return '0s';
        var hours = Math.floor(time / 3600);
        var mins = Math.floor(time / 60);
        var secs = time % 60;
        var output = '';
        if (hours>0){
            mins = mins - hours*60;
            output = output.concat(hours+'h');
        }
        if (mins>0)
            output = output.concat(mins+'m');
        if (secs>0)
            output = output.concat(secs+'s');

        return output;
    };
  });