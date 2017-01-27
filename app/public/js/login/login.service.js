(function() {
  'use strict';

  angular.module('app')
    .service('userService', function($http) {

      const vm = this;

      vm.$onInit = function() {
        if(!vm.userId || (vm.userId === false)) {
          $http.get('/auth/userid').then((result) => {
            console.log(result.data);
            vm.userId = result.data;
            console.log(vm.userId);
            return vm.userId;
          })
        }
        else {
          console.log('u got the user id');
        }
      }
    })
}());
