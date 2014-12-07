'use strict';

/**
 * @ngdoc service
 * @name musicPlaylistApp.PlayerLoaderTime
 * @description
 * # PlayerLoaderTime
 * Factory in the musicPlaylistApp.
 */
angular.module('musicPlaylistApp')
  .factory('PlayerLoaderTime', function () {

    var time = {
      currentTime: 0,
      totalTime: 0,
      percentTotal: 0,

      currentTimeHuman: "",
      totalTimeHuman: "",
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

      return mins+":"+secs;
    }

    // Public API here
    return {
      update: function (currentTime, totalTime) {
        //currentTime = Math.floor(currentTime);
      //  if (currentTime != time.currentTime) {
          time.currentTime = currentTime;
          time.totalTime = totalTime;
          time.percentTotal = (time.currentTime * 100) / time.totalTime;
          time.currentTimeHuman = secByMinSec(time.currentTime);
          time.totalTimeHuman = secByMinSec(time.totalTime);
      //  }
      },
      time: time
    }
  });
