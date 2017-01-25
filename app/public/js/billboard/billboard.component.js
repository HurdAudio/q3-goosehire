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

      vm.slides = [
        {image: 'images/img00.jpg', description: 'Image 00'},
        {image: 'images/img01.jpg', description: 'Image 01'},
        {image: 'images/img02.jpg', description: 'Image 02'}
      ];



    }


}());
