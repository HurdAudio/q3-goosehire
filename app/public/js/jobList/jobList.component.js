(function() {
  'use strict';

  angular.module('app')
    .component('jobList', {
      controller: JobListController,
      templateUrl: '/js/jobList/jobList.template.html'
    });

    JobListController.$inject = ['$http', '$state', 'searchFormService', 'userService'];

    function JobListController($http, $state, searchFormService, userService){
      const vm = this;

      vm.$onInit = function() {
        vm.searchResults = searchFormService.searchParams.results;
        vm.skills = searchFormService.searchParams.skills;
        vm.location = searchFormService.searchParams.location;
      }

      // console.log(vm.searchResults)

      vm.isUser = function() {
        return userService.userId ? true : false;
      }

      vm.saveSearch = function() {
        let request = {
          location: vm.location,
          skillSet: vm.skills,
        }
        $http.post(`/searches/${userService.userId}`, request).then((data) => {
          //TODO: make a toast/popup letting the user know their search has been saved
          return;
        })
      }
    }
}());
