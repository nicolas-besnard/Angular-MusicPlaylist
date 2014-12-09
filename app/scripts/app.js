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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/playlist/:id', {
        templateUrl: 'views/playlistcontent.html',
        controller: 'PlaylistcontentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function () {
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });


