'use strict';

describe('Directive: YoutubeVideoDirective', function () {

  // load the directive's module
  beforeEach(module('musicPlaylistApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-youtube-video-directive></-youtube-video-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the YoutubeVideoDirective directive');
  }));
});
