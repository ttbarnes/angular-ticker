'use strict';

describe('Directive: ticker', function () {

  // load the directive's module
  beforeEach(module('angularTickerApp'));

  /*
  var element,
    scope;
  */

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ticker></ticker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ticker directive');
  }));
  */

});
