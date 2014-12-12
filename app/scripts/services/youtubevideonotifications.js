'use strict';

/**
 * @ngdoc service
 * @name musicPlaylistApp.YoutubeVideoNotifications
 * @description
 * # YoutubeVideoNotifications
 * Factory in the musicPlaylistApp.
 */
angular.module('musicPlaylistApp')
  .factory('YoutubeVideoNotifications', function () {
    return {
      'Play':  'YoutubeVideoPlayNotification',
      'Pause': 'YoutubeVideoPauseNotification',
      'GoTo':  'YoutubeVideoGoTo'
    };
  });
