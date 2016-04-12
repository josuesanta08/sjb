'use strict';

/**
 * @ngdoc overview
 * @name sjbApp
 * @description
 * # sjbApp
 *
 * Main module of the application.
 */
angular
  .module('sjbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'highcharts-ng'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name sjbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sjbApp
 */
angular.module('sjbApp')
  .controller('MainCtrl', ["$scope", "teams", "scores", function ($scope, teams, scores) {
  	
  	$scope.DATES = ['2/4','9/4', '16/4', '23/4', '30/4'];

    $scope.teams = teams.getTeams();
    $scope.scores = scores.getScores();
    $scope.charts = {};

	$scope.changeValue = function(pChart, pTeam, pKey, pVal, pScore, pIndex) {
		pTeam.scoresByDate[$scope.DATES[$scope.indexDate]][pKey] = pVal;
		pChart.series[pIndex].data[$scope.indexDate] = pVal*pScore;

		setTotals();
	};

	$scope.totalsChart = {
		options: {
			chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false,
	            type: 'pie'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
	                }
	            }
	        }
	    },
	    title: {
	        text: 'Totales'
	    },
        series: [{
            name: 'Totales',
            colorByPoint: true,
            data: $scope.teams.map(function(pObj) { 
            	return {
            		name: pObj.name,
            		y: 0,
            		color: pObj.color
            	}; 
        	})
        }]
    };

	var createCharts = function() {
    	for (var key in $scope.scores) {
		    $scope.charts[key] = {
				options: {
					//This is the Main Highcharts chart config. Any Highchart options are valid here.
					//will be overriden by values specified below.
					chart: {
						type: $scope.scores[key].chartType
					},
					tooltip: {
						style: {
							padding: 10,
							fontWeight: 'bold'
						}
					}
				},
				//The below properties are watched separately for changes.

				//Series object (optional) - a list of series using normal Highcharts series options.
				series: $scope.teams.map(function(pObj) { 
					return {
						name: pObj.name,
						data: $scope.DATES.map(function(date) {
							if(pObj.scoresByDate[date]) {
								return pObj.scoresByDate[date][key]*$scope.scores[key].score;
							} else {
								return 0;
							}
						}),
						color: pObj.color
					};
				}),/*[{
					name: '',
					data: $scope.teams.map(function() { return 0; })
				}],*/
				//Title configuration (optional)
				title: {
					text: $scope.scores[key].label
				},
				//Boolean to control showing loading status on chart (optional)
				//Could be a string if you want to show specific loading text.
				loading: false,
				//Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
				//properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
				xAxis: {
					categories: $scope.DATES
				},
				//Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
				useHighStocks: false,

				score: $scope.scores[key].score,
				key: key
			};
		}
		setTotals();
	};

	var getTotals = function (pObj) {
		var total = 0;
		for (var date in pObj.scoresByDate) {
			for (var key in pObj.scoresByDate[date]) {
				total += pObj.scoresByDate[date][key] *$scope.scores[key].score;
			}
		}
		return total;
	};

	var setTotals = function() {
		var totals = $scope.teams.map(function(pObj) {
			return {
				name: pObj.name,
				y: getTotals(pObj),
            	color: pObj.color
			};
		});

		$scope.totalsChart.series[0].data = totals;
	};

	var init = function() {
		createCharts();
	};

	init();
  }]);

'use strict';

/**
 * @ngdoc function
 * @name sjbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sjbApp
 */
angular.module('sjbApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

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
