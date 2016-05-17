'use strict';

angular.module('duelApp')
  .directive('animalGrid', function () {

      return {
          restrict: 'EA',
          templateUrl: 'scripts/directives/animal-grid/animal-grid.html'
      };

  });
