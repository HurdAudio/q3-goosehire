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
           {image: '/images/GooseHire.png', description: 'Image 00'},
           {image: '/images/canada-goose.jpg', description: 'Image 01'}
       ];

      //  increment images
      vm.currentIndex = 0;

      // vm.index = vm.index;

      // vm.setCurrentSlideIndex = function (index) {
      //   console.log(index, "setCurrent");
      //   vm.currentIndex = index;
      // };
      //
      // vm.isCurrentSlideIndex = function (index) {
      //   console.log(index, "isCurrent");
      //   return vm.currentIndex === index;
      // };


        vm.setCurrentSlideIndex = function (index) {
            vm.currentIndex = index;
        };

        vm.isCurrentSlideIndex = function (index) {
            return vm.currentIndex === index;
        };

        vm.prevSlide = function () {
            vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
        };
        
        vm.nextSlide = function () {
            vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.slides.length - 1;
        };

    }

}());
