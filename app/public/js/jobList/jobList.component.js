(function() {
  'use strict';

  angular.module('app')
    .component('jobList', {
      controller: JobListController,
      templateUrl: '/js/jobList/jobList.template.html'
    });

    JobListController.$inject = ['$http', '$state', '$stateParams'];

    function JobListController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = function() {
        vm.searchResults = $stateParams.results;
        vm.skills = $stateParams.skills;
        vm.location = $stateParams.location;
        vm.title = $stateParams.title
      }

    }

}());
