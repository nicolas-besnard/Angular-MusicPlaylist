'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:PlayerProgressCtrl
 * @description
 * # PlayerProgressCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('PlayerProgressCtrl', function ($scope, YoutubeVideoService) {

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
