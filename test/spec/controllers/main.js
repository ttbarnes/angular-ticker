'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTickerApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('ticker items', function(){

    it('should have a list defined', function () {
      expect(scope.myTickerItems).toBeDefined();
    });

    it('should have 5 items', function () {
      expect(scope.myTickerItems.length).toEqual(5);
    });

    it('should have title and copy properties', function(){
      expect(scope.myTickerItems[0].title.length).toBeDefined();
      expect(scope.myTickerItems[0].copy.length).toBeDefined();
      expect(scope.myTickerItems[1].title.length).toBeDefined();
      expect(scope.myTickerItems[1].copy.length).toBeDefined();
      expect(scope.myTickerItems[2].title.length).toBeDefined();
      expect(scope.myTickerItems[2].copy.length).toBeDefined();
      expect(scope.myTickerItems[3].title.length).toBeDefined();
      expect(scope.myTickerItems[3].copy.length).toBeDefined();
      expect(scope.myTickerItems[4].title.length).toBeDefined();
      expect(scope.myTickerItems[4].copy.length).toBeDefined();
    });

  });

});
