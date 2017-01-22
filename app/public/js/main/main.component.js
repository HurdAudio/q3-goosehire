(function() {
  'use strict';

  angular.module('app')
    .component('main', {
      controller: MainController,
      templateUrl: '/js/main/main.template.html'
    });

    function MainController(){
      const vm = this;
    }

}());
