'use strict';

/**
 * @ngdoc directives
 * @name musicPlaylistApp.directives:PlayerControls
 * @description
 * # PlayerControls
 */

angular.module('musicPlaylistApp')
  .directive('playerControls', function (CurrentPlaylist) {
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

        $scope.playNext = function () {
          CurrentPlaylist.playNext();
        };

        $scope.playPrevious = function () {
          CurrentPlaylist.playPrevious();
        };

        elem.on('click', '.ion-play', function() {
          CurrentPlaylist.play();
          switchStat(this);
        });

        elem.on('click', '.ion-pause', function () {
          CurrentPlaylist.pause();
          switchStat(this);
        });
      }
    };
  });
