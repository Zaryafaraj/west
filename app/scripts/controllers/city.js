'use strict';
/**
 * Created by Fathalian on 1/19/15.
 */

angular.module('westApp')
  .controller('CityCtrl', ['$scope', '$routeParams', 'allApartments',
    function ($scope, $routeParams, allApartments) {

      $scope.allApartments = allApartments;

    }]);
