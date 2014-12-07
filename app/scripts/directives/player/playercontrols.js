'use strict';

/**
 * @ngdoc directives
 * @name musicPlaylistApp.directives:PlayerControls
 * @description
 * # PlayerControls
 */
angular.module('musicPlaylistApp')
  .directive('playerControls', function (YoutubeVideoNotifications) {
    return {
      restrict: 'E',
      templateUrl: '../../../views/directives/player-controls.html',
      link: function(scope, elem)
      {
        function switchStat(btn)
        {
          btn = angular.element(btn);

          if (btn.hasClass('pause')) {
            btn
              .removeClass('pause')
              .addClass('play');
          }
          else {
            btn
              .removeClass('play')
              .addClass('pause');
          }
        }

        elem.on('click', '.play', function() {
          scope.$emit(YoutubeVideoNotifications.Play);
          switchStat(this);
        });

        elem.on('click', '.pause', function () {
          scope.$emit(YoutubeVideoNotifications.Pause);
          switchStat(this);
        });
      }
    };
  });
