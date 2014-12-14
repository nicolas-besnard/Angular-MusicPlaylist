(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .directive('playlistsMenu', PlaylistsMenu);

  /* @ngInject */
  function PlaylistsMenu() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/RightMenu/PlaylistsMenu/PlaylistsMenu.directive.html'
    };

    return directive;
  }
})();
