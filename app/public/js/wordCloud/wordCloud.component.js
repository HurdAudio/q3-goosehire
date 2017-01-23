(function() {
  'use strict';

  angular.module('app')
    .component('wordCloud', {
      controller: WordCloudController,
      templateUrl: '/js/wordCloud/wordCloud.template.html'
    });

    function WordCloudController(){
      const vm = this;

    }

}());
