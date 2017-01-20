(function() {
  'use strict';

  angular.module('app')
    .component('wordCloud', {
      controller: wordCloudController,
      templateUrl: '/js/wordCloud/wordCloud.template.html'
    });

    // homeController.$inject = ['$http'];

    function wordCloudController(){
      const vm = this;

    }

}());
