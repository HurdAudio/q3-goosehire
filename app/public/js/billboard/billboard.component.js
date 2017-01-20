(function() {
  'use strict';

  angular.module('app')
    .component('billboard', {
      controller: billboardController,
      templateUrl: '/js/billboard/billboard.template.html'
    });

    // homeController.$inject = ['$http'];

    function billboardController(){
      const vm = this;

    }

}());
