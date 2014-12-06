'use strict';

describe('Directive: PlayerLoader', function () {

  // load the directive's module
  beforeEach(module('musicPlaylistApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-player-loader></-player-loader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the PlayerLoader directive');
  }));
});
