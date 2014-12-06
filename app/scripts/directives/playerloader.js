'use strict';

/**
 * @ngdoc directive
 * @name musicPlaylistApp.directive:PlayerLoader
 * @description
 * # PlayerLoader
 */
angular.module('musicPlaylistApp')
  .directive('playerLoader', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/player-loader.html',
      scope: {
        currentTime: '@',
        totalTime: '@'
      },
      link: function($scope)
      {
        console.log("PERCENT",  $scope.totalPercent);
        console.log("CURRENT TIME", $scope.currentTime);

        $scope.$watch('currenTime', function() {
          $scope.totalPercent = (($scope.currentTime * 100) / $scope.totalTime).toString();
          console.log("WATCH PERCENT",  $scope.totalPercent);
        }, true);
      }
    };
  });
