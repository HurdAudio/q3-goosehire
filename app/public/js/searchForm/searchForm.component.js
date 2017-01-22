(function() {
  'use strict';

  angular.module('app')
    .component('searchForm', {
      controller: SearchFormController,
      templateUrl: '/js/searchForm/searchForm.template.html'
    });

    SearchFormController.$inject = ['$http', '$state'];

    function SearchFormController($http, $state){
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
          console.log('srchFrmCtrl: ', response.data.results);

          return $state.go('jobList', {
            skills: vm.searchForm.skills,
            location: vm.searchForm.location,
            title: vm.searchForm.title,
            results: response.data.results
          })

        })
        .catch((err) => {
          console.log(err);
        });
      };
    };


}());
