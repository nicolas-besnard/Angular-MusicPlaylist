(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .controller('PlaylistCtrl', PlaylistCtrl);

  PlaylistCtrl.$inject = ['$routeParams', 'CurrentPlaylist'];

  /* @ngInject */
  function PlaylistCtrl($routeParams, CurrentPlaylist) {
    /* jshint validthis: true */
    var playlist = this;

    playlist.musics = [{
      id: 'Tdw7kxD8eUc',
      title: "AL Green - I'm So Tired of Being Alone"
    }, {
      id: 'akCgDFXN1ic',
      title: 'Kris Allen - Lost'
    }];

    playlist.play = function(id) {
      CurrentPlaylist.addAndPlay(id, "title");
    };

    playlist.addToCurrentPlaylist = function(id, title) {
      CurrentPlaylist.addSong(id, title);
    };

    playlist.id = $routeParams.id;
  }
})();
