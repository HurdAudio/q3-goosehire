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

      $http.get('./auth/linkedin').then(function (response) {
        // vm.things = response.data
        console.log('app.component', response);
        console.log('logged in');
      })


    }

    vm.logoutLinkedIn = function(){
      console.log('logout');
    }

    vm.$onInit = function(){


    }


  }

  //nav menu lives here

})();
