(function() {
  'use strict';

  angular.module('app')
    .component('billboard', {
      controller: BillboardController,
      templateUrl: '/js/billboard/billboard.template.html'
    });

    BillboardController.$inject = ['userService', '$http'];

    function BillboardController(userService, $http){
      const vm = this;
      console.log(vm);

      vm.slides = [];
      vm.myInterval = 9000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.isUser = function() {
        return userService.id ? true : false;
      }

    vm.$onInit = function() {
      vm.slides = [{
        image: '../images/banner01.jpg',
        id: 0
      },
      {
        image: '../images/banner02.jpg',
        id: 1
        //   text: 'Modify your skills to match desired job skills'
      }];
     };

    }


}());
