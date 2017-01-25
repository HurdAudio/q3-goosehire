(function() {
  'use strict';

  angular.module('app')
    .component('billboard', {
      controller: BillboardController,
      templateUrl: '/js/billboard/billboard.template.html'
    });

    function BillboardController(){
      const vm = this;
      console.log(vm);

      vm.slides = [];
      vm.myInterval = 4000;
      vm.noWrapSlides = false;
      vm.active = 0;

    vm.$onInit = function() {
      vm.slides = [{
        image: '../images/img00.jpg',
        id: 0,
        text: 'Add your skills and desired location'
      },
      {
        image: '../images/img00.jpg',
        id: 1,
        text: 'See jobs in your area'
      },
      {
        image: '../images/img00.jpg',
        id: 2,
        text: 'Modify your skills to match desired job skills'
      }];
     };

    }


}());
