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

      // console.log(vm.searchResults)

      vm.saveSearch = function() {
        console.log('clicked');
        vm.userid = '58862bb83c085df2aaf099cc';
        var request = {
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
