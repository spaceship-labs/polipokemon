'use strict';

/**
 * @ngdoc service
 * @name polipokemonApp.webcam
 * @description
 * # webcam
 * Service in the polipokemonApp.
 */
angular.module('polipokemonApp')
  .service('webcam', webcamService);

function webcamService() {
  var service = {
    attach: attach,
    freeze : freeze,
  };

  return service;


  function attach(element) {
    Webcam.attach(element);

  }
  function freeze(){
  	Webcam.freeze();
  }
}
