'use strict';

/**
 * @ngdoc overview
 * @name musicPlaylistApp
 * @description
 * # musicPlaylistApp
 *
 * Main module of the application.
 */

angular
  .module('musicPlaylistApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'scripts/Dashboard/Dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/playlist/:id', {
        templateUrl: 'scripts/Playlist/Playlist.html',
        controller: 'PlaylistCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  })
  .run(function () {
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });


