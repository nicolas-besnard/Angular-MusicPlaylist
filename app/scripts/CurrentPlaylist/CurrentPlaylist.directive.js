'use strict';

angular
  .module('musicPlaylistApp')
  .directive('currentPlaylist', CurrentPlaylist);

function CurrentPlaylist() {
  var directive = {
    link: link,
    templateUrl: 'scripts/CurrentPlaylist/CurrentPlaylist.directive.html',
    restrict: 'AE',
    controller: 'CurrentPlaylistCtrl',
    controllerAs: 'currentPlaylist'
  };
  return directive;

  function link(scope, element, attrs) {
    /* */
  }
}
