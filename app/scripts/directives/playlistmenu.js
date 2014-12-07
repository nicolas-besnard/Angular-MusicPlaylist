'use strict';

/**
 * @ngdoc directives
 * @name musicPlaylistApp.directives:PlaylistMenu
 * @description
 * # PlaylistMenu
 */
angular.module('musicPlaylistApp')
  .directive('playlistMenu', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/playlist-menu.html'
    };
  });
