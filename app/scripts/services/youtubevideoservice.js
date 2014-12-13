'use strict';

/**
 * @ngdoc service
 * @name musicPlaylistApp.YoutubeVideoService
 * @description
 * # YoutubeVideoService
 * Service in the musicPlaylistApp.
 */

angular.module('musicPlaylistApp')
  .service('YoutubeVideoService', function ($window, $rootScope, $log, $interval, YoutubeVideoNotifications) {
    var service = this;

    this.youtube = {
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
      service.youtube.ready = true;
      service.bindPlayer('placeholder');
      service.loadPlayer();
    };

    $rootScope.$on(YoutubeVideoNotifications.Play, function() {
      service.youtube.player.playVideo();
    });

    $rootScope.$on(YoutubeVideoNotifications.Pause, function() {
      service.youtube.player.pauseVideo();
    });

    $rootScope.$on(YoutubeVideoNotifications.GoTo, function(event, value) {
      var totalTime = service.youtube.totalTime;
      var goTo = value * totalTime;

      service.youtube.player.seekTo(goTo);
    });
    /**
     * Bind player to element
     */
    this.bindPlayer = function (elementId) {
      $log.info('Binding to ' + elementId);
      service.youtube.playerId = elementId;
    };

    /**
     * Load a player
     */
    this.loadPlayer = function () {
      if (service.youtube.ready && service.youtube.playerId) {
        if (service.youtube.player) {
          service.youtube.player.destroy();
        }
      }
        service.youtube.player = service.createPlayer();
    };

    /**
     * Create a new player
     * @returns {YT.Player}
     */
    this.createPlayer = function () {
      $log.info('Creating a new Youtube player for DOM id ' + service.youtube.playerId);
      return new YT.Player(service.youtube.playerId, {
        height: service.youtube.playerHeight,
        width: service.youtube.playerWidth,
        playerVars: {
          rel: 0,
          showinfo: 0
        },
        events: {
          'onReady': onYoutubeReady,
          'onStateChange': onYoutubeStateChange
        }
      });
    };

    this.launchPlayer = function (id, title) {
      if (id != service.youtube.currentSongId) {
        service.youtube.currentSongId = id;
        service.youtube.player.loadVideoById(id);
        $rootScope.$broadcast('player-controls:play');
      }
    };

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
        var currentTime = service.youtube.player.getCurrentTime();

        if (currentTime > service.youtube.currentTime) {
          service.youtube.currentTime = service.youtube.player.getCurrentTime();
          service.youtube.totalTime = service.youtube.player.getDuration();
          service.youtube.currentTimeHuman = secByMinSec(service.youtube.currentTime);
          service.youtube.totalTimeHuman = secByMinSec(service.youtube.totalTime);
          service.youtube.percentTime = (service.youtube.currentTime * 100) / service.youtube.totalTime;
        }
      }, 1000);
    }

    function onYoutubeStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
        service.youtube.state = 'playing';
      } else if (event.data == YT.PlayerState.PAUSED) {
        service.youtube.state = 'paused';
      } else if (event.data == YT.PlayerState.ENDED) {
        service.youtube.state = 'ended';
      }
      $rootScope.$apply();
    }
  });
