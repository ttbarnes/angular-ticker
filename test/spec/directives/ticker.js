'use strict';

describe('Directive: ticker', function () {
  var element, 
      scope, 
      compile,
      tickerItems,
      validTemplate = '<ul ticker timing="timing"><li ng-repeat="items in tickerItems">{{item}}</li></ul>';

  function createDirective(data, template) {
    var elm;

    tickerItems = [
      {
        title: 'item 1',
        copy: 'Tart candy canes gummi bears. Candy canes ice cream cheesecake tart pie powder sweet.'
      },
      {
        title: 'item 2',
        copy: 'Toffee jelly gummies donut cake. Fruitcake soufflé jelly cotton candy.'
      },
      {
        title: 'item 3',
        copy: 'Croissant cheesecake jujubes cupcake pudding apple pie cheesecake muffin.'
      },
      {
        title: 'item 4',
        copy: 'jelly beans croissant topping bear claw ice cream tootsie roll snaps.'
      },
      {
        title: 'item 5',
        copy: 'Cheesecake jujubes cupcake pudding apple pie cheesecake lollipop.'
      }
    ];


    // Setup scope state
    scope.tickerItems = tickerItems;
    scope.timing = 8000;

    // Create directive
    elm = compile(template || validTemplate)(scope);

    scope.$digest();
    //$timeout.flush()
    //scope.$apply();


    // Trigger watchers
    //scope.$apply();

    // Return
    return elm;
  }

  beforeEach(function () {

    // Load the directive's module
    module('angularTickerApp');

    // Provide any mocks needed
    /*
    module(function ($provide) {
      //$provide.value('Name', new MockName());
    });
    */

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
      scope.timing = 5000;
    });
  });

  describe('when created', function () {

    it('should compile template correctly', function () {
      element = createDirective(tickerItems);
      expect(element).toBeDefined();
    });

    it('should have items in ng-repeat', function(){
      element = createDirective(tickerItems);
      var items = element.find('li');
      expect(items.length).toEqual(5);
    });

    it('should have 5000 timer', function(){
      expect(scope.timing).toEqual(5000);
    });

  });

  describe('when the model changes', function () {
    // Add specs
  });

  return describe('when destroyed', function () {
    // Add specs
  });

});

