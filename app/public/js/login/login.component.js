(function() {
  'use strict';

  angular.module('app')
    .component('login', {
      controller: LoginController,
      templateUrl: '/js/login/login.template.html'
    });

    LoginController.$inject = ['$http', '$state', '$stateParams', 'userService'];

    function LoginController($http, $state, $stateParams, userService){
      const vm = this;

      vm.userValidate = userService.validate;
    }

}());
