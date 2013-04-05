'use strict';

describe('Controller: SelectLectureCtrl', function () {

  // load the controller's module
  beforeEach(module('lectureApp'));

  var SelectLectureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    SelectLectureCtrl = $controller('SelectLectureCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
