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
      console.log("PLAY", id);
      CurrentPlaylist.addAndPlay(id, "title");

      //this.$emit(YoutubeVideoNotifications.ChangeVideo, id);
    };

    album.addToCurrentPlaylist = function(id, title) {
      console.log("addSong");
      CurrentPlaylist.addSong(id, title);
    };
    ////////////////
  }
})();
