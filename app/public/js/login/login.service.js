(function() {
  'use strict';

  angular.module('app')
    .service('userService', function($http) {
      console.log('service is lit');

      const vm = this;

      vm.linkedIn = function() {
        vm.validate();
      };

      vm.validate = function() {
        vm.id = '5883e0b0c3c69cc68ae7ae1';
        //this get will go to linkedin id route
        $http.get(`/users/${vm.id}`).then((result) => {
          console.log(result.status);
          if(result.status === 200) {
            vm.userId = result.data._id;
            return vm.userId;
          }
        })
        .catch((err) =>{
          if(err.status === 404) {
            $http.post('/users', {linkedInId: vm.id}).then((result) => {
              console.log(result);
            })
          }
          else {
            console.log(err);
          }
        })
      }
    })
}());
