(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .controller('AlbumCtrl', AlbumCtrl);

  AlbumCtrl.$inject = ['$routeParams', 'CurrentPlaylist'];

  /* @ngInject */
  function AlbumCtrl($routeParams, CurrentPlaylist) {
    /* jshint validthis: true */
    var album = this;

    album.musics = [{
      id: 'Tdw7kxD8eUc',
      title: "AL Green - I'm So Tired of Being Alone"
    }, {
      id: 'akCgDFXN1ic',
      title: 'Kris Allen - Lost'
    }];

    album.play = function(id) {
      CurrentPlaylist.addAndPlay(id, "title");
    };

    album.addToCurrentPlaylist = function(id, title) {
      CurrentPlaylist.addSong(id, title);
    };
  }
})();
