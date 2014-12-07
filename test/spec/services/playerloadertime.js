'use strict';

describe('Service: PlayerLoaderTime', function () {

  // load the service's module
  beforeEach(module('musicPlaylistApp'));

  // instantiate service
  var PlayerLoaderTime;
  beforeEach(inject(function (_PlayerLoaderTime_) {
    PlayerLoaderTime = _PlayerLoaderTime_;
  }));

  it('should do something', function () {
    expect(!!PlayerLoaderTime).toBe(true);
  });

});
