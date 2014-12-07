'use strict';

describe('Directive: PlaylistMenu', function () {

  // load the directives's module
  beforeEach(module('musicPlaylistApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-playlist-menu></-playlist-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the PlaylistMenu directives');
  }));
});
