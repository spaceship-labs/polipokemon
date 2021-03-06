'use strict';

/**
 * @ngdoc function
 * @name polipokemonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the polipokemonApp
 */
angular.module('polipokemonApp')
  .controller('MainCtrl', function() {
    var vm = this;
    vm.init = init;

    vm.init();

    function init() {
      vm.map = {
        center: { latitude: 23.85, longitude: -102 },
        zoom: 6
      };
    }




  });
