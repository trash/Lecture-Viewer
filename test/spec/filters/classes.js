'use strict';

describe('Filter: classes', function () {

  // load the filter's module
  beforeEach(module('lectureApp'));

  // initialize a new instance of the filter before each test
  var classes;
  beforeEach(inject(function ($filter) {
    classes = $filter('classes');
  }));

  it('should return the input prefixed with "classes filter:"', function () {
    var text = 'angularjs';
    expect(classes(text)).toBe('classes filter: ' + text);
  });

});
