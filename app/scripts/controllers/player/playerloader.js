'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:PlayerloaderCtrl
 * @description
 * # PlayerloaderCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('PlayerloaderCtrl', function ($scope, YoutubeVideoService) {

    $scope.$watch(function() {
        return YoutubeVideoService.youtube.currentTime;
      },
      function (newValue) {
        $scope.currentTime = YoutubeVideoService.youtube.currentTimeHuman;
        $scope.totalTime = YoutubeVideoService.youtube.totalTimeHuman;
        $scope.percentTotal = YoutubeVideoService.youtube.percentTotal;
        $scope.percentTime = YoutubeVideoService.youtube.percentTime;
      }, true);

  });
