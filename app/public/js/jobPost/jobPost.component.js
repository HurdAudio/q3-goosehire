(function() {
  'use strict';

  angular.module('app')
    .component('jobPost', {
      controller: JobPostController,
      bindings: {
        job: "<"
      },
      templateUrl: '/js/jobPost/jobPost.template.html'
    });

    function JobPostController(){
      const vm = this;

      // console.log("job post controller");
    }

}());
