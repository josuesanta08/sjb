'use strict';

/**
 * @ngdoc service
 * @name sjbApp.teams
 * @description
 * # teams
 * Factory in the sjbApp.
 */
angular.module('sjbApp')
  .factory('teams', function () {
    // Service logic
    // ...

    var TEAMS = [{
      name: 'Los 300',
      color: '#E80C3F',
      image: '',
      scores: {},
      scoresByDate: {
        '2/4': {
          ASSISTANCE: 5,
          ASSISTANCE_SUN_WED: 0,
          VERS: 0,
          GAMES: 2,
          QUESTIONS: 0,
          FEE: 1,
          BIBLE: 3,
          VISIT: 0,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 0
        },
        '9/4': {
          ASSISTANCE: 7,
          ASSISTANCE_SUN_WED: 6,
          VERS: 22,
          GAMES: 1,
          QUESTIONS: 16.5,
          FEE: 2,
          BIBLE: 5,
          VISIT: 1,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 3
        },
        '16/4': {
          ASSISTANCE: 0,
          ASSISTANCE_SUN_WED: 6,
          VERS: 0,
          GAMES: 0,
          QUESTIONS: 0,
          FEE: 0,
          BIBLE: 0,
          VISIT: 0,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 0
        }
      }
    },{
      name: 'Los Valientes de David',
      color: '#399CBD',
      image: '',
      scores: {},
      scoresByDate: {
        '2/4': {
          ASSISTANCE: 5,
          ASSISTANCE_SUN_WED: 0,
          VERS: 0,
          GAMES: 0,
          QUESTIONS: 0,
          FEE: 3,
          BIBLE: 3,
          VISIT: 1,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 0
        },
        '9/4': {
          ASSISTANCE: 8,
          ASSISTANCE_SUN_WED: 9,
          VERS: 29,
          GAMES: 1,
          QUESTIONS: 19.75,
          FEE: 5,
          BIBLE: 5,
          VISIT: 2,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 4
        },
        '16/4': {
          ASSISTANCE: 0,
          ASSISTANCE_SUN_WED: 10,
          VERS: 0,
          GAMES: 0,
          QUESTIONS: 0,
          FEE: 0,
          BIBLE: 0,
          VISIT: 0,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 0
        }
      }
    },{
      name: 'Heroes of the Faith',
      color: '#5ABD39',
      image: '',
      scores: {},
      scoresByDate: {
        '2/4': {
          ASSISTANCE: 3,
          ASSISTANCE_SUN_WED: 0,
          VERS: 0,
          GAMES: 1,
          QUESTIONS: 0,
          FEE: 1,
          BIBLE: 3,
          VISIT: 0,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 0
        },
        '9/4': {
          ASSISTANCE: 7,
          ASSISTANCE_SUN_WED: 5,
          VERS: 21,
          GAMES: 1,
          QUESTIONS: 16.75,
          FEE: 5,
          BIBLE: 6,
          VISIT: 0,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 2
        },
        '16/4': {
          ASSISTANCE: 0,
          ASSISTANCE_SUN_WED: 11,
          VERS: 0,
          GAMES: 0,
          QUESTIONS: 0,
          FEE: 0,
          BIBLE: 0,
          VISIT: 0,
          VISIT_SECOND: 0,
          VISIT_THIRD: 0,
          RESCUE: 0,
          HOMEWORK: 0
        }
      }
    }];

    // Public API here
    return {
      getTeams: function () {
        return TEAMS;
      }
    };
  });

  //11100
  //13200
  //17200
