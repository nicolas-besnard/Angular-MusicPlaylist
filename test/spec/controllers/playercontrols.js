'use strict';

describe('Controller: PlayercontrolsCtrl', function () {

  // load the controller's module
  beforeEach(module('musicPlaylistApp'));

  var PlayercontrolsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayercontrolsCtrl = $controller('PlayercontrolsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
