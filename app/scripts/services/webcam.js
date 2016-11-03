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
  };

  return service;

  function attach(element) {
    Webcam.attach(element);

  }
}
