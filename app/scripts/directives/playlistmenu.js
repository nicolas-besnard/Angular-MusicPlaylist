'use strict';

/**
 * @ngdoc directive
 * @name musicPlaylistApp.directive:PlaylistMenu
 * @description
 * # PlaylistMenu
 */
angular.module('musicPlaylistApp')
  .directive('playlistMenu', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/playlist-menu.html'
    };
  });
