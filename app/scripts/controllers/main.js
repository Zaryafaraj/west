'use strict';

/**
 * @ngdoc function
 * @name westApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the westApp
 */
angular.module('westApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
