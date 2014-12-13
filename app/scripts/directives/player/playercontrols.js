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
      link: function($scope, elem)
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

        $scope.$on('player-controls:play', function () {
          var btn = angular.element(elem).find('.play');

          if (btn.hasClass('ion-play')) {
            switchStat(btn);
          }
        });

        $scope.$on('player-controls:song-forward', function (event, hasSong) {
          var btn = angular.element(elem).find('.forward');
          console.log("RECEIVE");
          if (hasSong && btn.hasClass('no-song')) {
            btn.removeClass('no-song');
          }
          else if (!hasSong && !btn.hasClass('no-song')) {
            btn.addClass('no-song');
          }
        });

        $scope.$on('player-controls:song-backward', function (event, hasSong) {
          var btn = angular.element(elem).find('.backward');

          if (hasSong && btn.hasClass('no-song')) {
            btn.removeClass('no-song');
          }
          else if (!hasSong && !btn.hasClass('no-song')) {
            btn.addClass('no-song');
          }
        });

        elem.on('click', '.ion-play', function() {
          $scope.$emit(YoutubeVideoNotifications.Play);
          switchStat(this);
        });

        elem.on('click', '.ion-pause', function () {
          $scope.$emit(YoutubeVideoNotifications.Pause);
          switchStat(this);
        });
      }
    };
  });
