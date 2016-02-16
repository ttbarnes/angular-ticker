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

    //setup scope state
    scope.tickerItems = tickerItems;
    scope.timing = 8000;

    //create directive
    elm = compile(template || validTemplate)(scope);

    scope.$digest();

    return elm;
  }

  beforeEach(function(){

    module('angularTickerApp');

    //inject angular constructs
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;

      var timingEffectDivideBy = 4;
      //mimic default config
      var defaultTiming = 5000,
          defaultTimingEffect = defaultTiming / timingEffectDivideBy * 2,
          isHovered = false,
          innerTime = false,
          start = false;

      //custom config
      var customTiming = 2500;
      var customTimingEffect = customTiming / timingEffectDivideBy;

      scope.config = {
        defaults:{
          timing: defaultTiming,
          timingEffectDivideBy: timingEffectDivideBy,
          timingEffect: defaultTimingEffect,
          isHovered : isHovered,
          innerTime: innerTime,
          start: start
        },
        custom:{
          timing: customTiming,
          timingEffectDivideBy: timingEffectDivideBy,
          timingEffect: customTimingEffect
        }
      };

    });

  });

  describe('when created', function(){

    it('should compile template correctly', function(){
      element = createDirective(tickerItems);
      expect(element).toBeDefined();
    });

    it('should have items in ng-repeat', function(){
      element = createDirective(tickerItems);
      var items = element.find('li');
      expect(items.length).toEqual(5);
    });

    it('should add a class', function(){
      expect(element.hasClass('active')).toBe(true);
    });

    describe('with default config', function(){

      it('should have timer of 5000', function(){
        expect(scope.config.defaults.timing).toEqual(5000);
      });

      it('should calculate timingEffect correctly', function(){
        expect(scope.config.defaults.timingEffect).toEqual(2500);
      });

      it('should have isHovered as false', function(){
        expect(scope.config.defaults.isHovered).toBeDefined()
        expect(scope.config.defaults.isHovered).toBeFalsy()
      })

      it('should have innerTime variable', function(){
        expect(scope.config.defaults.innerTime).toBeDefined()
        expect(scope.config.defaults.innerTime).toBeFalsy()
      })

      it('should have startv variable', function(){
        expect(scope.config.defaults.start).toBeDefined()
        expect(scope.config.defaults.start).toBeFalsy()
      })

    });

    describe('with a custom config', function(){

      it('should have timer of 2500', function(){
        expect(scope.config.custom.timing).toEqual(2500);
      });

      it('should calculate timingEffect correctly', function(){
        expect(scope.config.custom.timingEffect).toEqual(625);
      });

    });

  });

});

