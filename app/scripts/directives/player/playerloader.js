'use strict';

/**
 * @ngdoc directives
 * @name musicPlaylistApp.directives:PlayerLoader
 * @description
 * # PlayerLoader
 */
angular.module('musicPlaylistApp')
  .directive('playerLoader', function (YoutubeVideoNotifications) {
    return {
      restrict: 'E',
      templateUrl: '../../../views/directives/player-loader.html',
      link: function (scope, elem) {
        elem.on('click', function(event) {
          var ratio = (event.pageX - $(this).offset().left) / $(this).outerWidth();
          
          scope.$emit(YoutubeVideoNotifications.GoTo, ratio);
        });
      },
      controller: 'PlayerloaderCtrl'
    };
  });
