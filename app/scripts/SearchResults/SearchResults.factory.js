(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .factory('SearchResultsFactory', SearchResultFactory);

  /* @ngInject */
  function SearchResultFactory() {
    var results = [];

    var service = {
      results: results,
      addSong: addSong
    };

    return service;

    function addSong(title, thumbnail) {
      results.push({
        title: title,
        thumbnail: thumbnail
      });
    }
  }
})();
