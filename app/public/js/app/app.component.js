(function () {
'use strict';

  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: appController
    })

  appController.$inject = ['$http']
  function appController($http) {
    var vm = this

    vm.$onInit = onInit;

    function onInit() {
      vm.addingPost = false;
    }
  }

})();
