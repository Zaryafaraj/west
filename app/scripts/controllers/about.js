'use strict';

/**
 * @ngdoc function
 * @name westApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the westApp
 */
angular.module('westApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
