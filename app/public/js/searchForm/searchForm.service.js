(function() {
  'use strict';

  angular.module('app')
    .service('searchFormService', function($http) {

      this.searchResults = [];

      this.getResults = function(searchParams) {
        console.log('searchService params: ', searchParams)
        return  $http({
          method:'GET',
          url: '/indeed',
          params: {
            skills: searchParams.skills,
            location: searchParams.location,
          }
        })
        .then((response) => {
          console.log('searchService: ', response)
          return this.searchResults = response.data.results
        })
        .catch((err) => {
          console.log(err);
        });
      }
    });

}());
