'use strict';

/**
 * @ngdoc overview
 * @name westApp
 * @description
 * # westApp
 *
 * Main module of the application.
 */

angular.module('westApp.services', ['ngRoute', 'ngResource']);

angular
  .module('westApp', [
    'westApp.services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'wu.masonry'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/city/:cityName', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl',
        resolve: {
          allApartments : ['AllApartmentsLoader', function(AllApartmentsLoader) {
            return new AllApartmentsLoader();
          }]
        }
      })

      .otherwise({
        redirectTo: '/'
      });
  });
