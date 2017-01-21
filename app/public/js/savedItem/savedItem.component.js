(function() {
  'use strict';

  angular.module('app')
    .component('savedItem', {
      controller: SavedItemController,
      templateUrl: '/js/savedItem/savedItem.template.html'
    });

    function SavedItemController(){
      const vm = this;

    }

}());
