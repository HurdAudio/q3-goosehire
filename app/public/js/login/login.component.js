(function() {
  'use strict';

  angular.module('app')
    .component('login', {
      controller: loginController,
      templateUrl: '/js/login/login.template.html'
    });

    // homeController.$inject = ['$http'];

    function loginController(){
      const vm = this;

    }

}());
