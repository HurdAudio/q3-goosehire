(function() {
  'use strict';

  angular.module('app')
    .component('billboard', {
      controller: BillboardController,
      templateUrl: '/js/billboard/billboard.template.html'
    });


    BillboardController.$inject = ['userService', '$http'];

    function BillboardController(userService, $http){

      const vm = this;

      vm.slides = [];
      vm.myInterval = 9000;
      vm.noWrapSlides = false;
      vm.active = 0;


      vm.userid = '58862bb83c085df2aaf099cc';
      vm.savedSkills = vm.savedSkills;
      vm.savedJobSearches = vm.savedJobSearches;

    vm.$onInit = function() {
      vm.slides = [{
        image: '../images/banner01.jpg',
        id: 0
      },
      {
        image: '../images/banner02.jpg',
        id: 1
        //   text: 'Modify your skills to match desired job skills'
      }];

      //if logged in
      if(vm.isUser){
        console.log('logged in');

        // $http.get(`/skillsets/${vm.userid}`)
        //   .then((result)=> {
        //     console.log('result', result);
        //     vm.savedSkills = results;
        //   })
        //   .catch((err)=>{
        //     console.log(err);
        //   })

        // $http.get(`/searches/${vm.userid}`)
        //   .then((result)=> {
        //     console.log('result', result);
        //     vm.savedJobSearches = results;
        //   })
        //   .catch((err)=>{
        //     console.log(err);
        //   })

      }


     };

     vm.isUser = function() {
       return userService.userId ? true : false;
     }
    }



    // vm.search = function() {
    //   searchFormService.getResults(vm.searchForm)
    //     .then(() => {
    //       console.log('this happened');
    //       return $state.go('jobList');
    //     });
    // }


}());
