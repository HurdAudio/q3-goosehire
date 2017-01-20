(function() {
  'use strict';

  angular.module('app')
    .component('jobListing', {
      controller: jobListingController,
      templateUrl: '/js/jobListing/jobListing.template.html'
    });

    // homeController.$inject = ['$http'];

    function jobListingController(){
      const vm = this;

    }

}());
