(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .controller('PlayerProgressCtrl', PlayerProgressCtrl);

  PlayerProgressCtrl.$inject = ['$scope', 'YoutubeVideoService'];

  /* @ngInject */
  function PlayerProgressCtrl($scope, YoutubeVideoService) {
    $scope.$watch(function() {
        return YoutubeVideoService.youtube.currentTime;
      },
      function (newValue) {
        $scope.currentTime = YoutubeVideoService.youtube.currentTimeHuman;
        $scope.totalTime = YoutubeVideoService.youtube.totalTimeHuman;
        $scope.percentTotal = YoutubeVideoService.youtube.percentTotal;
        $scope.percentTime = YoutubeVideoService.youtube.percentTime;
      }, true);
  }
})();
