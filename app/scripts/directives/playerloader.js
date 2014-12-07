'use strict';

/**
 * @ngdoc directive
 * @name musicPlaylistApp.directive:PlayerLoader
 * @description
 * # PlayerLoader
 */
angular.module('musicPlaylistApp')
  .directive('playerLoader', function (YoutubeVideoNotifications) {
    return {
      restrict: 'E',
      templateUrl: 'views/player-loader.html',
      link: function (scope, elem) {
        elem.on('click', '.timer', function(event) {
          var ratio = (event.pageX - $(this).offset().left) / $(this).outerWidth();
          scope.$emit(YoutubeVideoNotifications.GoTo, ratio);
        });
      }
    };
  });
