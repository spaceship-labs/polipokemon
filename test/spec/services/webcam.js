'use strict';

describe('Service: webcam', function () {

  // load the service's module
  beforeEach(module('polipokemonApp'));

  // instantiate service
  var webcam;
  beforeEach(inject(function (_webcam_) {
    webcam = _webcam_;
  }));

  it('should do something', function () {
    expect(!!webcam).toBe(true);
  });

});
