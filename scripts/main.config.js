angular
  .module('TacoYelp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/store/:id', {
        templateUrl: 'templates/store.html',
        controller: 'StoresCtrl',
        controllerAs: 'store'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
