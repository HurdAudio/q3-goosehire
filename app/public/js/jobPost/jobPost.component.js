(function() {
  'use strict';

  angular.module('app')
    .component('jobPost', {
      controller: JobPostController,
      templateUrl: '/js/jobPost/jobPost.template.html'
    });

    function JobPostController(){
      const vm = this;

    }

}());
