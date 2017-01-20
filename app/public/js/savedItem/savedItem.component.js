(function() {
  'use strict';

  angular.module('app')
    .component('savedItem', {
      controller: savedItemController,
      templateUrl: '/js/savedItem/savedItem.template.html'
    });

    // homeController.$inject = ['$http'];

    function savedItemController(){
      const vm = this;

    }

}());
