'use strict';

/**
 * @ngdoc function
 * @name sjbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sjbApp
 */
angular.module('sjbApp')
  .controller('MainCtrl', function ($scope, teams, scores) {
  	
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
  });
