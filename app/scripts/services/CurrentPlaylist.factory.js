angular
  .module('musicPlaylistApp')
  .factory('CurrentPlaylist', CurrentPlaylist);

/* @ngInject */
function CurrentPlaylist() {

  var songs = [{
    'id': 'akCgDFXN1ic',
    'title': 'Lost',
    'artist': 'Kris Allen',
    'artwork': 'http://www.audiocastle.co/uploads/albums/Kris_Allen_-_Horizons_Album_Download.jpg'
  }];

  var service = {
    addSong: addSong,
    removeSong: removeSong,
    songs: songs
  };

  return service;

  ////////////////

  function addSong(id, title) {
    songs.push({
      "id": id,
      "title": title
    });
  }

  function removeSong(id, title) {
    song = songs.filter(function (elem) {
      return elem.id != id && elem.title != title
    });
  }
}
