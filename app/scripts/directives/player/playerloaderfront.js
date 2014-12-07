'use strict';

/**
 * @ngdoc directives
 * @name musicPlaylistApp.directives:PlayerLoaderFront
 * @description
 * # PlayerLoaderFront
 */
angular.module('musicPlaylistApp')
  .directive('playerLoaderFront', function () {
    return {
      restrict: 'A',

      link: function (scope, elem, attrs) {
        attrs.$observe('loaderWidth', function (value) {
          elem.css({
            'width': value + '%'
          });
        });
      }
    };
  });
