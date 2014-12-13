angular
  .module('musicPlaylistApp')
  .factory('CurrentPlaylist', CurrentPlaylist);

CurrentPlaylist.$inject = ['$rootScope', 'YoutubeVideoService']
/* @ngInject */
function CurrentPlaylist($rootScope, YoutubeVideoService) {

  var songs = [{
    'id': 'akCgDFXN1ic',
    'title': 'Lost',
    'artist': 'Kris Allen',
    'artwork': 'http://www.audiocastle.co/uploads/albums/Kris_Allen_-_Horizons_Album_Download.jpg'
  }, {
    'id': 'FZTtWohzAJQ',
    'title': 'House Of The Rising Son',
    'artist': 'The White Buffalo & The Forest Rangers',
    'artwork': 'data:image/jpeg;base64,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'
  }];

  var nbSongs = 2;
  var currentSong = -1;

  var service = {
    addSong: addSong,
    removeSong: removeSong,
    playSong: playSong,
    playNext: playNext,
    playPrevious: playPrevious,
    play: play,
    pause: pause,

    songs: songs
  };

  return service;

  ////////////////

  function addSong(id, title) {
    songs.push({
      "id": id,
      "title": title
    });
    nbSongs += 1;

    controlsState();
  }

  function removeSong(id, title) {
    song = songs.filter(function (elem) {
      return elem.id != id && elem.title != title
    });
    nbSongs -= 1;

    controlsState();
  }

  function playSong(id) {
    if (id < nbSongs) {
      currentSong = id;
      var song = songs[id];

      YoutubeVideoService.launchPlayer(song.id, song.title);

      controlsState();
    }
  }

  function playNext() {
    if (currentSong + 1 != nbSongs) {
      playSong(currentSong + 1);
    }
  }

  function playPrevious() {
    if (currentSong - 1 >= 0) {
      playSong(currentSong - 1);
    }
  }

  function play() {
    YoutubeVideoService.youtube.player.playVideo();
  }

  function pause() {
    YoutubeVideoService.youtube.player.pauseVideo();
  }

  ////////////////
  // PRIVATE
  ////////////////

  function controlsState() {
    if (currentSong + 1 == nbSongs) {
      $rootScope.$broadcast('player-controls:song-forward', false);

      if (nbSongs > 1) {
        $rootScope.$broadcast('player-controls:song-backward', true);
      }
    }

    if (currentSong + 1 < nbSongs) {
      $rootScope.$broadcast('player-controls:song-forward', true);
    }

    if (currentSong == 0) {
      $rootScope.$broadcast('player-controls:song-backward', false);

      if (nbSongs > 1) {
        $rootScope.$broadcast('player-controls:song-forward', true);
      }
    }
  }
}
