'use strict';

describe('Service: YoutubeVideoNotifications', function () {

  // load the service's module
  beforeEach(module('musicPlaylistApp'));

  // instantiate service
  var YoutubeVideoNotifications;
  beforeEach(inject(function (_YoutubeVideoNotifications_) {
    YoutubeVideoNotifications = _YoutubeVideoNotifications_;
  }));

  it('should do something', function () {
    expect(!!YoutubeVideoNotifications).toBe(true);
  });

});
