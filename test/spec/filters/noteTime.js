'use strict';

describe('Filter: noteTime', function () {

  // load the filter's module
  beforeEach(module('lectureApp'));

  // initialize a new instance of the filter before each test
  var noteTime;
  beforeEach(inject(function ($filter) {
    noteTime = $filter('noteTime');
  }));

  it('should return the input prefixed with "noteTime filter:"', function () {
    var text = 'angularjs';
    expect(noteTime(text)).toBe('noteTime filter: ' + text);
  });

});
