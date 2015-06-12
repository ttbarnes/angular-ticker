'use strict';

/**
 * @ngdoc directive
 * @name angularTickerApp.directive:ticker
 * @description
 * # ticker
 */
angular.module('angularTickerApp')
  .directive('ticker', function () {
    return {
      restrict: 'EA',
      transclude : false,
      scope: {
        tickeritems: '='
      },
      templateUrl: 'views/directives/ticker.html',
      link: function postLink(scope, elm) {

        /*

        elm.bind('mouseover', function(){
          elm.addClass('mouseover-test');
        });

        elm.bind('mouseout', function(){
          elm.removeClass('mouseover-test');
        });
        */

      }
    };
  });
