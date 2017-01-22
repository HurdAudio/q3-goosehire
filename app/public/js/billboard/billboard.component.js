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
      var count = 0;

      vm.setCurrentSlideIndex = function (index) {
          console.log(index, "setCurrent");
          count++;
          console.log(count);
          vm.currentIndex = index;
      };

      vm.isCurrentSlideIndex = function (index) {
        console.log(index, "isCurrent");
        count++;
        console.log(count);
          return vm.currentIndex === index;
      };

      vm.prevSlide = function () {
        console.log("prevSLide");
          vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
      };

      vm.nextSlide = function () {
        console.log("nextSLide");
          vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.slides.length - 1;
      };

    }

}());
