(function() {
  'use strict';

  angular.module('app')
    .component('searchForm', {
      controller: SearchFormController,
      templateUrl: '/js/searchForm/searchForm.template.html'
    });

    SearchFormController.$inject = ['$state', 'searchFormService', 'savedItemService'];

    function SearchFormController($state, searchFormService, savedItemService){
      const vm = this;

      vm.searchForm.skills = savedItemService.skills;

      vm.search = function() {
        searchFormService.getResults(vm.searchForm)
          .then(() => {
            console.log('this happened');
            return $state.go('jobList');
          });
      }
    };


}());
