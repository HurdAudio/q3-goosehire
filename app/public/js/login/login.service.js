(function() {
  'use strict';

  angular.module('app')
    .service('userService', function($http) {
      console.log('service is lit');

      const vm = this;

      // var linkedInId = '123';
      vm.id = '5883e0b0c3c69cc68ae7ae17';

      vm.validate = function(id) {
        $http.get(`/users/${vm.id}`).then((data) => {
          console.log(data);
        })
      }
    })
}());
