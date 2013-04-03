'use strict';

describe('Filter: noteDirection', function () {

  // load the filter's module
  beforeEach(module('lectureApp'));

  // initialize a new instance of the filter before each test
  var noteDirection;
  beforeEach(inject(function ($filter) {
    noteDirection = $filter('noteDirection');
  }));

  it('should return the input prefixed with "noteDirection filter:"', function () {
    var text = 'angularjs';
    expect(noteDirection(text)).toBe('noteDirection filter: ' + text);
  });

});
