(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .factory('PlayerTitleFactory', PlayerTitleFactory);


  PlayerTitleFactory.$inject = ['$rootScope'];

  /* @ngInject */
  function PlayerTitleFactory($rootScope) {
    var song = {
      title: '',
      author: ''
    };

    var service = {
      setTitle: setTitle,
      song: song
    };

    return service;

    ////////////////

    function setTitle(newAuthor, newTitle) {
      song.title = newTitle;
      song.author = newAuthor;
    }
  }
})();
