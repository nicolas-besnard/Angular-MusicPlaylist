'use strict';

angular
  .module('musicPlaylistApp')
  .controller('CurrentPlaylistCtrl', CurrentPlaylistCtrl);

CurrentPlaylistCtrl.$inject = ['CurrentPlaylist', 'YoutubeVideoService'];

/* @ngInject */
function CurrentPlaylistCtrl(CurrentPlaylist, YoutubeVideoService) {
  /* jshint validthis: true */
  var vm = this;

  vm.songs = CurrentPlaylist.songs;
  vm.play = play;

  function play(id, artist, title) {
    console.log("play");
    YoutubeVideoService.launchPlayer(id, title);
  }
}
