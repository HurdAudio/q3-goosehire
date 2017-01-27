(function () {
'use strict';

  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: AppController
    })


  AppController.$inject = ['$http', 'userService']
  function AppController($http, userService) {
    const vm = this;

    vm.$onInit = function(){


    }
  }
  //nav menu lives here

})();
