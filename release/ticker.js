'use strict';

angular.module('simpleAngularTicker', []).
  directive('ticker', function ($interval, $timeout) {
    return {

      restrict: 'A',
      scope: true,
      compile: function(){

        return function (scope, element, attributes){

          var timing,
              timingEffect,
              timingEffectDivideBy = 4,
              start;

          if (attributes.timing) {
            timing = attributes.timing;
            timingEffect = timing / timingEffectDivideBy;
          } 
          else {
            timing = 5000;
            timingEffect = timing / timingEffectDivideBy / timingEffectDivideBy * 2;
          }

          scope.$watch(element, function(){

            var list = element,
                items = element.find('li'),
                itemFirst;


            if(items.length) {
              list.addClass('active');

              start = $interval(function(){

                items = list.children('li');
                itemFirst = angular.element(items[0]);

                itemFirst.addClass('fade-out minus-margin-top');

                $timeout(function(){
                  itemFirst.removeClass('minus-margin-top');
                  list.append(itemFirst);

                  $timeout(function(){
                    items.removeClass('fade-out');
                  }, timingEffect);

                }, timingEffect);

              }, timing);

            }
            else {
              console.warn('no items assigned to ticker! Ensure you have correctly assigned items to your ng-repeat.');
            }

          });

          element.on('$destroy', function() {
            $interval.cancel(start, 0);
          });

        };
      }

    };
  });
