(function() {
  'use strict';

  angular.module('app')
    .component('searchForm', {
      controller: searchFormController,
      templateUrl: '/js/searchForm/searchForm.template.html'
    });

    // homeController.$inject = ['$http'];

    function searchFormController(){
      const vm = this;

    }

}());
