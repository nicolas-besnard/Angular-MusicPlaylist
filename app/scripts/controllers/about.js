'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
