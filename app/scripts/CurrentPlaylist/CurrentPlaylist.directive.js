(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .directive('currentPlaylist', CurrentPlaylist);

  function CurrentPlaylist() {
    var directive = {
      templateUrl: 'scripts/CurrentPlaylist/CurrentPlaylist.directive.html',
      restrict: 'AE',
      controller: 'CurrentPlaylistCtrl',
      controllerAs: 'currentPlaylist'
    };

    return directive;
  }
})();
