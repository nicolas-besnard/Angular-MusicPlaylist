(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .directive('playerProgressPlaying', PlayerProgressPlaying);

  /* @ngInject */
  function PlayerProgressPlaying() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      restrict: 'A',
      link: link
    };
    return directive;

    function link(scope, elem, attrs) {
      attrs.$observe('loaderWidth', function (value) {
        elem.css({'width': value + '%'});
      });
    }
  }
})();
