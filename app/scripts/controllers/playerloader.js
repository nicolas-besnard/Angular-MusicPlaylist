'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:PlayerloaderCtrl
 * @description
 * # PlayerloaderCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('PlayerloaderCtrl', function ($scope) {
    $scope.currentTime = "100";
    $scope.totalTime = "250";
    $scope.totalPercent = "20";
  });
