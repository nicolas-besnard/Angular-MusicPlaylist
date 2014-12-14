(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .controller('CurrentPlaylistCtrl', CurrentPlaylistCtrl);

  CurrentPlaylistCtrl.$inject = ['CurrentPlaylist'];

  /* @ngInject */
  function CurrentPlaylistCtrl(CurrentPlaylist) {
    /* jshint validthis: true */
    var vm = this;

    vm.songs = CurrentPlaylist.songs;
    vm.currentId = 0;
    vm.play = play;

    function play(id) {
      CurrentPlaylist.playSong(id);
    }
  }
})();
