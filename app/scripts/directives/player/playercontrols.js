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

          if (btn.hasClass('ion-pause')) {
            btn
              .removeClass('ion-pause')
              .removeClass('pause')
              .addClass('ion-play')
              .addClass('play');
          }
          else {
            btn
              .removeClass('ion-play')
              .removeClass('play')
              .addClass('ion-pause')
              .addClass('pause');
          }
        }

        elem.on('click', '.ion-play', function() {
          scope.$emit(YoutubeVideoNotifications.Play);
          switchStat(this);
        });

        elem.on('click', '.ion-pause', function () {
          scope.$emit(YoutubeVideoNotifications.Pause);
          switchStat(this);
        });
      }
    };
  });
