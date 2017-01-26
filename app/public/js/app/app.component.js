(function () {
'use strict';

  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: AppController
    })

  AppController.$inject = ['$http']
  function AppController($http) {
    const vm = this;

    vm.showLogin = function() {
      vm.viewLogin = !vm.viewLogin;
    }
  }

  //nav menu lives here

})();
