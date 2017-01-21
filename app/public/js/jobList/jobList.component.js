(function() {
  'use strict';

  angular.module('app')
    .component('jobList', {
      controller: JobListController,
      templateUrl: '/js/jobList/jobList.template.html'
    });

    function JobListController(){
      const vm = this;

    }

}());
