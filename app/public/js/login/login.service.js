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
          console.log('u got that user id');
        }
      }

      // vm.isUser = function() {
      //   console.log(!vm.userId);
      //   if(!vm.userId || (vm.userId === false)) {
      //     var a = getUserId();
      //     console.log(a);
      //   }
      //   return vm.userId;
      // }
      //
      //
      // function getUserId() {
      //   $http.get('/auth/userid').then((result) => {
      //     console.log(result.data);
      //     return result.data;
      //   })
      // }

      vm.validate = function() {
        vm.id = '5883e0b0c3c69cc68ae7ae17';
        //this get will go to linkedin id route
        $http.get(`/users/${vm.id}`).then((result) => {
          if(result.status === 200) {
            vm.userId = result.data._id;
            return vm.userId;
          }
        })
        .catch((err) =>{
          if(err.status === 404) {
            $http.post('/users', {linkedInId: vm.id}).then((result) => {
              vm.userId = result.data._id;
              return vm.userId;
            })
          }
          else {
            console.log(err);
          }
        })
      }
    })
}());
