import angular from 'angular';
import chartnpm from 'chart.js'
import chartjs from 'angular-chart.js'
import ngAnimate from 'angular-animate';
import angularMeteor from 'angular-meteor';
import hashtags from './hashtags';
import chart from './chart';
import messages from './messages';
import './accounts-config.js';

var app = angular.module('app', [
  angularMeteor,
  ngAnimate,
  'chart.js',
  hashtags.name,
  messages.name,
  chart.name,
  'accounts.ui',
]);

app.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
  }]);

app.directive('scroll', ['$timeout', function ($timeout) {
  return {
    scope: {
      scroll: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('scroll', function (newValue) {
        if (newValue) {
          $timeout(function(){
            $(element).scrollTop($(element)[0].scrollHeight);
          }, 500);
        }
      });
    }
  }
}]);
