'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('PlaylistCtrl', function ($scope) {
    $scope.playlists = ['titi', 'toto'];
  });
