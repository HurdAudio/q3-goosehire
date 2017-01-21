(function () {
'use strict';

  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: AppController
    })

  AppController.$inject = ['$http']
  function AppController($http) {
    const vm = this
  }

  //nav menu lives here

})();
