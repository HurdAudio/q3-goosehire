(function() {
  'use strict';

  angular.module('app')
    .component('jobList', {
      controller: JobListController,
      templateUrl: '/js/jobList/jobList.template.html'
    });

    JobListController.$inject = ['$http', '$state', '$stateParams', 'searchFormService'];

    function JobListController($http, $state, $stateParams, searchFormService){
      const vm = this;

      vm.$onInit = function() {
        vm.searchResults = searchFormService.searchResults;
        vm.skills = $stateParams.skills;
        vm.location = $stateParams.location;
      }

      console.log(vm.searchResults)

    }

}());
