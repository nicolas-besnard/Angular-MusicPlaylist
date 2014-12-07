'use strict';

/**
 * @ngdoc directive
 * @name musicPlaylistApp.directive:PlayerLoader
 * @description
 * # PlayerLoader
 */
angular.module('musicPlaylistApp')
  .directive('playerLoader', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/player-loader.html'
    };
  });
