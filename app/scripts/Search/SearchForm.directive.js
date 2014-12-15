(function () {
  'use strict';

  angular
    .module('musicPlaylistApp')
    .directive('searchForm', SearchForm);

  /* @ngInject */
  function SearchForm(YoutubeSearch, SearchResultsFactory) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,
      restrict: 'E',
      templateUrl: 'scripts/Search/SearchForm.directive.html',
      replace: true
    };
    return directive;

    function link(scope, element, attrs) {
      scope.searchTerm = '';

      element.find('.form-control')
        .on('keyup', function () {
          console.log("KEY UP", scope.searchTerm);

          YoutubeSearch.search(scope.searchTerm)
            .success(function(data, status, headers, config) {
              var totalResults = data.feed.openSearch$totalResults.$t;

              console.log("total", totalResults);

              var max = '';
              if (totalResults > 10) {
                max = 10;
              }
              else {
                max = totalResults;
              }

              SearchResultsFactory.results.length = 0;

              for (var i = 0; i < max; i++) {
                var obj = data.feed.entry[i];

                var title = obj.title.$t;
                var url   = (obj.id.$t).substr(-11);
                var thumbnail = obj.media$group.media$thumbnail[0].url;

                SearchResultsFactory.addSong(title, thumbnail);
              }

              console.log("RESULSTS 1", SearchResultsFactory.results);

              $('.side-wrapper').addClass('active');

              $('.side-wrapper-status').hide();
              $('.side-wrapper-result').fadeIn(300);
            })
            .error(function () {
              $('side-wrapper').removeClass('active');

              $('.side-wrapper-status').fadeIn(300);
              $('.side-wrapper-result').hide();
            });
        })
        .on('focus', function() {
          console.log('ON FOCUS');
          $('.side-wrapper').addClass('open').fadeIn();
        });
    }
  }
})();
