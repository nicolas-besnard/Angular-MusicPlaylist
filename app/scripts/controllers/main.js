'use strict';

/**
 * @ngdoc function
 * @name musicPlaylistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musicPlaylistApp
 */
angular.module('musicPlaylistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
