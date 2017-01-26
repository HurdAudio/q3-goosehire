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

    vm.loginLinkedIn = function(){
      console.log('login');
    }

    vm.logoutLinkedIn = function(){
      console.log('logout');
    }

    vm.$onInit = function(){


    }


  }

  //nav menu lives here

})();
