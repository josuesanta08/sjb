'use strict';

/**
 * @ngdoc service
 * @name sjbApp.scores
 * @description
 * # scores
 * Factory in the sjbApp.
 */
angular.module('sjbApp')
  .factory('scores', function () {
    // Service logic
    // ...

    var SCORES = {
      ASSISTANCE: {
        label: 'Asistencia Sábados',
        score: 200,
        chartType: 'line'
      },
      ASSISTANCE_SUN_WED: {
        label: 'Asistencia Miércoles/Domingos',
        score: 100,
        chartType: 'spline'
      },
      VERS: {
        label: 'Versículos',
        score: 200,
        chartType: 'areaspline'
      },
      GAMES: {
        label: 'Juegos',
        score: 500,
        chartType: 'column'
      },
      QUESTIONS: {
        label: 'Preguntas',
        score: 100,
        chartType: 'line'
      },
      FEE: {
        label: 'Cuota',
        score: 100,
        chartType: 'spline'
      },
      BIBLE: {
        label: 'Biblia',
        score: 200,
        chartType: 'areaspline'
      },
      VISIT: {
        label: 'Visitas',
        score: 1000,
        chartType: 'column'
      },
      VISIT_SECOND: {
        label: 'Visitas Segunda Vez',
        score: 500,
        chartType: 'line'
      },
      VISIT_THIRD: {
        label: 'Visitas Tercera Vez',
        score: 200,
        chartType: 'spline'
      },
      RESCUE: {
        label: 'Rescate',
        score: 800,
        chartType: 'areaspline'
      },
      HOMEWORK: {
        label: 'Tarea',
        score: 500,
        chartType: 'column'
      }
    };

    // Public API here
    return {
      getScores: function () {
        return SCORES;
      }
    };
  });
