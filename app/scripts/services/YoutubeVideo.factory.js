(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .factory('YoutubeVideoService', YoutubeVideoService);

  YoutubeVideoService.$inject = ['$window', '$rootScope', '$log', '$interval'];

  /* @ngInject */
  function YoutubeVideoService($window, $rootScope, $log, $interval) {

    var youtube = {
      ready: false,
      player: null,
      playerId: null,
      videoId: null,
      videoTitle: null,
      playerHeight: '480',
      playerWidth: '640',
      state: 'stopped',
      percentTime: 0,
      currentTime: 0,
      totalTime: 0,
      currentTimeHuman: '0:00',
      totalTimeHuman: '0:00',
      currentSongId: ''
    };

    $window.onYouTubeIframeAPIReady = function () {
      $log.info('Youtube API is ready');
      youtube.ready = true;
      bindPlayer('placeholder');
      loadPlayer();
    };

    var service = {
      'goTo': goTo,
      'youtube': youtube,
      'launchPlayer': launchPlayer
    };

    return service;

    function goTo (ratio) {
      var totalTime = youtube.totalTime;
      var goTo = ratio * totalTime;
      youtube.player.seekTo(goTo);
    }

    /**
     * Bind player to element
     */
    function bindPlayer (elementId) {
      $log.info('Binding to ' + elementId);
      youtube.playerId = elementId;
    }

    /**
     * Load a player
     */
    function loadPlayer () {
      if (youtube.ready && youtube.playerId) {
        if (youtube.player) {
          youtube.player.destroy();
        }
      }
      youtube.player = createPlayer();
    }

    /**
     * Create a new player
     * @returns {YT.Player}
     */
    function createPlayer () {
      $log.info('Creating a new Youtube player for DOM id ' + youtube.playerId);
      return new YT.Player(youtube.playerId, {
        height: youtube.playerHeight,
        width: youtube.playerWidth,
        playerVars: {
          rel: 0,
          showinfo: 0
        },
        events: {
          'onReady': onYoutubeReady,
          'onStateChange': onYoutubeStateChange
        }
      });
    }

    function launchPlayer (id, title) {
      if (id != youtube.currentSongId) {
        youtube.currentSongId = id;
        youtube.player.loadVideoById(id);
        $rootScope.$broadcast('player-controls:play');
      }
    }

    function secByMinSec(sec) {
      var mins = Math.floor(sec / 60);
      var secs = Math.floor(sec % 60);
      if (secs < 10) {
        secs = '0' + Math.floor(sec % 60);
      }
      else {
        secs = Math.floor(sec % 60);
      }

      return mins +':' +secs;
    }

    function onYoutubeReady(event) {
      $log.info('YouTube Player is ready');
      $interval(function () {
        var currentTime = youtube.player.getCurrentTime();

        if (currentTime > youtube.currentTime) {
          youtube.currentTime = youtube.player.getCurrentTime();
          youtube.totalTime = youtube.player.getDuration();
          youtube.currentTimeHuman = secByMinSec(youtube.currentTime);
          youtube.totalTimeHuman = secByMinSec(youtube.totalTime);
          youtube.percentTime = (youtube.currentTime * 100) / youtube.totalTime;
        }
      }, 1000);
    }

    function onYoutubeStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
        youtube.state = 'playing';
      } else if (event.data == YT.PlayerState.PAUSED) {
        youtube.state = 'paused';
      } else if (event.data == YT.PlayerState.ENDED) {
        youtube.state = 'ended';
      }
      $rootScope.$apply();
    }
  }
})();
