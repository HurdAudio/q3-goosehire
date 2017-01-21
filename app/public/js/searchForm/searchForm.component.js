(function() {
  'use strict';

  angular.module('app')
    .component('searchForm', {
      controller: SearchFormController,
      templateUrl: '/js/searchForm/searchForm.template.html'
    });

    SearchFormController.$inject = ['$http']

    function SearchFormController($http){
      const vm = this;

      vm.indeedSearch = function() {
        console.log('this happened')

        $http.get('/indeed')
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        });
      }
    }


}());
