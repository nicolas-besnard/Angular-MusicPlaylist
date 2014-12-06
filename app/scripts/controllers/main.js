'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('MainCtrl', function ($scope, YoutubeVideoNotifications) {
    $scope.playVideo = function () {
      this.$broadcast(YoutubeVideoNotifications.Play);
    }
  });