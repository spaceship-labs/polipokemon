'use strict';

/**
 * @ngdoc function
 * @name polipokemonApp.controller:CaptureCtrl
 * @description
 * # CaptureCtrl
 * Controller of the polipokemonApp
 */
angular.module('polipokemonApp')
  .controller('CaptureCtrl', function(webcam) {
    var vm = this;

    vm.init = init;

    vm.init();

    function init() {
      webcam.attach('#camera');
    }
  });
