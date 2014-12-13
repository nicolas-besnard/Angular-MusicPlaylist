'use strict';

/**
 * @ngdoc directives
 * @name musicPlaylistApp.directives:PlayerLoader
 * @description
 * # PlayerLoader
 */
angular.module('musicPlaylistApp')
  .directive('playerProgress', function (YoutubeVideoNotifications) {
    return {
      restrict: 'E',
      templateUrl: 'scripts/PlayerProgress/PlayerProgress.html',
      link: function (scope, elem) {
        elem.on('click', function(event) {
          var ratio = (event.pageX - $(this).offset().left) / $(this).outerWidth();

          scope.$emit(YoutubeVideoNotifications.GoTo, ratio);
        });
      },
      controller: 'PlayerProgressCtrl'
    };
  });
