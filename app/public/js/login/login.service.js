(function() {
  'use strict';

  angular.module('app')
    .service('userService', function($http) {

      const vm = this;

      

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
