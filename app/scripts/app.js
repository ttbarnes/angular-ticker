'use strict';

/**
 * @ngdoc overview
 * @name angularTickerApp
 * @description
 * # angularTickerApp
 *
 * Main module of the application.
 */
angular
  .module('angularTickerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'MainCtrl'
      });
  });
