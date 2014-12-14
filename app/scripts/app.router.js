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
      .when('/album/:id', {
        templateUrl: 'scripts/Album/Album.html',
        controller: 'AlbumCtrl',
        controllerAs: 'album'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  })
