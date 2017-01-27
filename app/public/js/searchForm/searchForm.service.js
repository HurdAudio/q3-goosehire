(function() {
 'use strict';

 angular.module('app')
   .service('searchFormService', function($http) {

     // this.searchResults = [];
     this.searchParams = {
       skills: '',
       location: '',
       results: []
     };

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
         return this.searchParams = {
           skills: searchParams.skills,
           location: searchParams.location,
           results: response.data.results
         };
       })
       .catch((err) => {
         console.log(err);
       });
     }
   });

}());
