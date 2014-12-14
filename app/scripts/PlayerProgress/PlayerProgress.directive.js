(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .directive('playerProgress', PlayerProgress);

  /* @ngInject */
  function PlayerProgress(YoutubeVideoService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/PlayerProgress/PlayerProgress.directive.html',
      link: link,
      controller: 'PlayerProgressCtrl'
    };

    return directive;

    function link(scope, elem) {
      elem.on('click', function(event) {
        var ratio = (event.pageX - $(this).offset().left) / $(this).outerWidth();

        YoutubeVideoService.goTo(ratio);
      });
    }
  }
})();
