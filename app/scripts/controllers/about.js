'use strict';

/**
 * @ngdoc function
 * @name sjbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sjbApp
 */
angular.module('sjbApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
