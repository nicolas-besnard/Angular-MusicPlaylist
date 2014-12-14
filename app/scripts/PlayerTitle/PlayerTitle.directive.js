(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .directive('playerTitle', PlayerTitle);

  PlayerTitle.$inject = ['PlayerTitleFactory'];

  /* @ngInject */
  function PlayerTitle(PlayerTitleFactory) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      restrict: 'E',
      templateUrl: 'scripts/PlayerTitle/PlayerTitle.directive.html',
      controller: 'PlayerTitleCtrl',
      controllerAs: 'playerTitle'
    };

    return directive;
  }
})();
