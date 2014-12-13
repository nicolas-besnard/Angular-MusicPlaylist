'use strict';

/**
 * @ngdoc directives
 * @name musicPlaylistApp.directives:PlayerLoader
 * @description
 * # PlayerLoader
 */
angular.module('musicPlaylistApp')
  .directive('playerProgress', function (YoutubeVideoService) {
    return {
      restrict: 'E',
      templateUrl: 'scripts/PlayerProgress/PlayerProgress.directive.html',
      link: function (scope, elem) {
        elem.on('click', function(event) {
          var ratio = (event.pageX - $(this).offset().left) / $(this).outerWidth();

          YoutubeVideoService.goTo(ratio);
        });
      },
      controller: 'PlayerProgressCtrl'
    };
  });
