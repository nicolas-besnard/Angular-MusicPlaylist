(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .directive('albumsMenu', AlbumsMenu);

  /* @ngInject */
  function AlbumsMenu() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/RightMenu/AlbumsMenu/AlbumsMenu.directive.html'
    };

    return directive;
  }
})();
