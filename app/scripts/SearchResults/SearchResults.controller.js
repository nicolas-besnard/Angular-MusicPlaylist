(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .controller('SearchResultsCtrl', SearchResultsCtrl);

  SearchResultsCtrl.$inject = ['$scope', 'SearchResultsFactory'];

  /* @ngInject */
  function SearchResultsCtrl($scope, SearchResultsFactory) {
    /* jshint validthis: true */
    var searchResults = this;

    searchResults.results = SearchResultsFactory.results;
  }
})();
