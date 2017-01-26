(function () {
'use strict';

  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: AppController
    })

<<<<<<< HEAD
  AppController.$inject = ['$http', 'userService'];
  function AppController($http, userService) {
    const vm = this;

    vm.linkedIn = userService.linkedIn;
=======
  AppController.$inject = ['$http']
  function AppController($http) {
    const vm = this;

    vm.$onInit = function(){


    }

>>>>>>> 57feba5641e16261a95594391aef8f53d28d26d1

  }

  //nav menu lives here

})();
