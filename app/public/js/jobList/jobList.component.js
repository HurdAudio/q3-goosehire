(function() {
  'use strict';

  angular.module('app')
    .component('jobList', {
      controller: jobListController,
      templateUrl: '/js/jobList/jobList.template.html'
    });

    // homeController.$inject = ['$http'];

    function jobListController(){
      const vm = this;

    }

}());
