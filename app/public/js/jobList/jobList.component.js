(function() {
  'use strict';

  angular.module('app')
    .component('jobList', {
      controller: JobListController,
      templateUrl: '/js/jobList/jobList.template.html'
    });

    JobListController.$inject = ['$http', '$state', 'searchFormService'];

    function JobListController($http, $state, searchFormService){
      const vm = this;

      vm.$onInit = function() {
        vm.searchResults = searchFormService.searchParams.results;
        vm.skills = searchFormService.searchParams.skills;
        vm.location = searchFormService.searchParams.location;
      }

      // console.log(vm.searchResults)

      vm.saveSearch = function() {
        vm.userid = '58862bb83c085df2aaf099cc';
        let request = {
          location: vm.location,
          skillSet: vm.skills,
        }
        $http.post(`/searches/${vm.userid}`, request).then((data) => {
          //TODO: make a toast/popup letting the user know their search has been saved
          console.log(data);
          return;
        })
      }
    }
}());
