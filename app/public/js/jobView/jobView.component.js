(function() {
  'use strict';

  angular.module('app')
    .component('jobView', {
      controller: JobViewController,
      templateUrl: '/js/jobView/jobView.template.html'
    });
    
    function JobViewController(){
      const vm = this;

    }

}());
