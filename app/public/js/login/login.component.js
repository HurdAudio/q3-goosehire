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

      vm.$onInit() = onInit;
      vm.login = login;
      vm.newUser = newUser;

      function onInit() {

      }

      function login() {

      }

      function newUser() {
        $http.post('/users', vm.user).then((res) => {
          console.log(res);
        })
      }
    }

}());
