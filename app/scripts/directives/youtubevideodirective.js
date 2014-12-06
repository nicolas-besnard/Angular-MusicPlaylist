'use strict';

/**
 * @ngdoc directive
 * @name musicPlaylistApp.directive:YoutubeVideoDirective
 * @description
 * # YoutubeVideoDirective
 */
angular.module('musicPlaylistApp')
  .directive('youtubeVideo', function ($window, YoutubeVideoNotifications)
  {
    return {
      restrict: 'E',
      template: '<div></div>',
      link: function (scope, element)
      {

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";

        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;

        var playerStats = {
          '-1': 'UNSTARTED',
          '0': 'ENDED',
          '1': 'PLAYING',
          '2': 'PAUSED',
          '3': 'BUFFERING',
          '5': 'MUSIC_CUED'
        };

        $window.onPlayerStateChange = function (event) {
          var state = event.data.toString();
          console.log("Player state change", playerStats[state]);
        };


        scope.$on(YoutubeVideoNotifications.Play, function () {
          player.playVideo();
        });

        scope.$on(YoutubeVideoNotifications.Pause, function () {
          player.pauseVideo();
        });

        scope.$on(YoutubeVideoNotifications.ChangeVideo, function (event, videoId) {
          if (videoId)
          {
            player.loadVideoById(videoId);
          }
        });

        $window.onYouTubeIframeAPIReady = function () {
          player = new YT.Player(element.children()[0], {
            playerVars: {
              html5: 1,
              controls: 1
            },
            events: {
              'onStateChange': 'onPlayerStateChange'
            },
            height: 480,
            width: 600,
            videoId: 'If5MF4wm1T8'
          });
        };
      }
    };
  });
