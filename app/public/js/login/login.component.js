(function() {
  'use strict';

  angular.module('app')
    .component('login', {
      controller: LoginController,
      templateUrl: '/js/login/login.template.html'
    });

    LoginController.$inject = ['$http', '$state', '$stateParams'];

    function LoginController($http, $state, $stateParams){
      const vm = this;

    }

}());
