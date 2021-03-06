'use strict';

describe('Controller: CurrentplaylistCtrl', function () {

  // load the controller's module
  beforeEach(module('musicPlaylistApp'));

  var CurrentplaylistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrentplaylistCtrl = $controller('CurrentplaylistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
