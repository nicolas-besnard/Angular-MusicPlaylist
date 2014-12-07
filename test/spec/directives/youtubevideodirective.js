'use strict';

describe('Directive: YoutubeVideoDirective', function () {

  // load the directives's module
  beforeEach(module('musicPlaylistApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-youtube-video-directives></-youtube-video-directives>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the YoutubeVideoDirective directives');
  }));
});
