(function() {
  'use strict';

  angular.module('app')
    .component('jobView', {
      controller: jobViewController,
      templateUrl: '/js/jobView/jobView.template.html'
    });

    // homeController.$inject = ['$http'];

    function jobViewController(){
      const vm = this;

    }

}());
