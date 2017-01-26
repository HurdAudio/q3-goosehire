(function() {
  'use strict';

  angular.module('app')
    .service('userService', function($http) {
      console.log('service is lit');

      const vm = this;

      vm.linkedIn = function() {
        console.log('linkedin');
      };


      vm.id = '5883e0b0c3c69cc68ae7ae17';

      vm.validate = function(id) {
        $http.get(`/users/${vm.id}`).then((result) => {
          // need to include post if user doesn't exist ex: 404
          console.log(result);
          if(result.status === 200) {
            console.log('gr8');
            vm.userId = result.data._id;
            console.log(vm.userId);
            return vm.userId;
          }
        })
        .catch((err) =>{
          console.log(err);
        })
      }
    })
}());
