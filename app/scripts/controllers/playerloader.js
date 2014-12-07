'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:PlayerloaderCtrl
 * @description
 * # PlayerloaderCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('PlayerloaderCtrl', function ($scope, YoutubeVideoNotifications, PlayerLoaderTime) {
    $scope.currentTime = 0;
    $scope.totalTime = 0;
    $scope.totalPercent = 0;

    $scope.$watch(function() {
      return PlayerLoaderTime.time
    },
      function (newValue) {
        $scope.currentTime = newValue.currentTimeHuman;
        $scope.totalTime = newValue.totalTimeHuman;
        $scope.totalPercent = newValue.totalPercent;
    }, true);
  });
