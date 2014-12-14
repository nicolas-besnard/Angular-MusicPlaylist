(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .controller('PlayerTitleCtrl', PlayerTitleCtrl);

  PlayerTitleCtrl.$inject = ['PlayerTitleFactory'];

  /* @ngInject */
  function PlayerTitleCtrl(PlayerTitleFactory) {
    /* jshint validthis: true */
    var playerTitle = this;

    playerTitle.song = PlayerTitleFactory.song;
  }
})();
