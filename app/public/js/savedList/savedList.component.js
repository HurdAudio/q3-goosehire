(function() {
  'use strict';

  angular.module('app')
    .component('savedList', {
      controller: savedListController,
      templateUrl: '/js/savedList/savedList.template.html'
    });

    // homeController.$inject = ['$http'];

    function savedListController(){
      const vm = this;

    }

}());
