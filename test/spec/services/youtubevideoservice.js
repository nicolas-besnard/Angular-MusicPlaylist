'use strict';

describe('Service: YoutubeVideoService', function () {

  // load the service's module
  beforeEach(module('musicPlaylistApp'));

  // instantiate service
  var YoutubeVideoService;
  beforeEach(inject(function (_YoutubeVideoService_) {
    YoutubeVideoService = _YoutubeVideoService_;
  }));

  it('should do something', function () {
    expect(!!YoutubeVideoService).toBe(true);
  });

});
