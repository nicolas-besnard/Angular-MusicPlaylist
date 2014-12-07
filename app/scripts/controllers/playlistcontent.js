'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:PlaylistcontentCtrl
 * @description
 * # PlaylistcontentCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('PlaylistcontentCtrl', function ($scope, $routeParams, YoutubeVideoNotifications) {
    $scope.musics = [{
      id: 'Tdw7kxD8eUc',
      title: "AL Green - I'm So Tired of Being Alone"
    }, {
      id: 'akCgDFXN1ic',
      title: 'Kris Allen - Lost '
    }];

    $scope.play = function(id) {
      console.log("PLAY", id);
      this.$emit(YoutubeVideoNotifications.ChangeVideo, id);
    };

    $scope.id = $routeParams.id;
  });
