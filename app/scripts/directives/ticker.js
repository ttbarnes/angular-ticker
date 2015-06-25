'use strict';

angular.module('angularTickerApp')
  .directive('ticker', function ($interval) {
    return {

      restrict: 'A',
      scope: true,
      //compile: function (element, attributes) {
      compile: function () {

        return function (scope, element, attributes){

          var timing,
              timingEffect,
              timingEffectDivideBy = 4;

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
                item1;

            console.info(items.length + ' items in ticker');

            $interval(function(){

              items = list.children('li');
              item1 = angular.element(items[0]);

              item1.addClass('fade-out minus-margin-top');

              setTimeout(function(){
                item1.removeClass('fade-out minus-margin-top');
                list.append(item1);
                item1.addClass('fade-out');

                setTimeout(function(){
                  items.removeClass('fade-out');
                }, timingEffect);

              }, timingEffect);

            }, timing);

          });

        };
      }

    };
  });
