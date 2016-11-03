'use strict';

describe('Controller: CaptureCtrl', function () {

  // load the controller's module
  beforeEach(module('polipokemonApp'));

  var CaptureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaptureCtrl = $controller('CaptureCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CaptureCtrl.awesomeThings.length).toBe(3);
  });
});
