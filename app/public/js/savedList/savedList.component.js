(function() {
  'use strict';

  angular.module('app')
    .component('savedList', {
      controller: SavedListController,
      templateUrl: '/js/savedList/savedList.template.html'
    });

    function SavedListController(){
      const vm = this;

    }

}());
