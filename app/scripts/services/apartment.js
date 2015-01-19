/**
 *
 * Created by Fathalian on 1/19/15.
 */
'use strict';

var app = angular.module('westApp.services');

app.factory('Apartment', ['$resource', function($resource) {
  return $resource('http://localhost:8000/cities/:cityId');
}]);

app.factory('AllApartmentsLoader', ['Apartment', '$route', '$q',
  function(Apartment, $route, $q){

    //constructor function used in resolve
    return function() {
      var cityName = $route.current.params.cityName;
      var deferred = $q.defer();
      Apartment.query({cityId: cityName},
        function( allApartments ) {
          deferred.resolve( allApartments );
        }, function() {
          deferred.reject( 'Unable to fetch all apartments' );
        } );
      return deferred.promise;
    };

}]);
