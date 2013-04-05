'use strict';

describe('Controller: SplashCtrl', function () {

  // load the controller's module
  beforeEach(module('lectureApp'));

  var SplashCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    SplashCtrl = $controller('SplashCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
