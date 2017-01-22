(function() {
  'use strict';

  angular.module('app')
    .component('searchForm', {
      controller: SearchFormController,
      templateUrl: '/js/searchForm/searchForm.template.html'
    });

    SearchFormController.$inject = ['$http'];

    function SearchFormController($http){
      const vm = this;

      vm.indeedSearch = function() {
        $http({
          method:'GET',
          url: '/indeed',
          params: {
            skills: vm.searchForm.skills,
            location: vm.searchForm.location,
            title: vm.searchForm.title
          }
        })
        .then((response) => {
          console.log(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
      };
    };


}());
