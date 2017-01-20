(function() {
  'use strict';

  angular.module('app')
    .component('jobPost', {
      controller: jobPostController,
      templateUrl: '/js/jobPost/jobPost.template.html'
    });

    // homeController.$inject = ['$http'];

    function jobPostController(){
      const vm = this;

    }

}());
