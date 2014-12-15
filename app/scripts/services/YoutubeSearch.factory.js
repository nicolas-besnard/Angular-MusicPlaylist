(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .factory('YoutubeSearch', YoutubeSearch);

  YoutubeSearch.$inject = ['$http'];

  /* @ngInject */
  function YoutubeSearch($http) {
    var service = {
      search: search
    };

    return service;

    ////////////////

    function search(term) {
      var baseUrl = "http://gdata.youtube.com/feeds/api/videos?max-results=10&start-index=1&alt=json&q=";

      return $http.get(baseUrl + term);
    }

    function successSearch(data, status, headers, config) {
      console.log("Success", data);
    }

    function errorSearch(data, status, headers, config) {
      console.log("Fail ", data);
    }
  }
})();
