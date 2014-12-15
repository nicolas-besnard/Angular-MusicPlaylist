(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .directive('searchResults', SearchResults);

  /* @ngInject */
  function SearchResults() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      templateUrl: 'scripts/SearchResults/SearchResults.directive.html',
      restrict: 'AE',
      controller: 'SearchResultsCtrl',
      controllerAs: 'searchResults'
    };

    return directive;
  }
})();
