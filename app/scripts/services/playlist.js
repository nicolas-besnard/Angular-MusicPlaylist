'use strict';

/**
 * @ngdoc service
 * @name musicPlaylistApp.Playlist
 * @description
 * # Playlist
 * Factory in the musicPlaylistApp.
 */
angular.module('musicPlaylistApp')
  .factory('Playlist', function () {
    return {
      'playlists': [{
        id: '1',
        name: "name 1"
      }, {
        id: '2',
        name: "name 2"
      }]
    };
  });
