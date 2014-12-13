'use strict';

angular
  .module('musicPlaylistApp')
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
