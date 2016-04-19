import angular from 'angular';
import ngAnimate from 'angular-animate';
import angularMeteor from 'angular-meteor';
import hashtags from './hashtags';
import messages from './messages';
import './accounts-config.js';

var app = angular.module('simple-todos', [
  angularMeteor,
  ngAnimate,
  hashtags.name,
  messages.name,
  'accounts.ui',

]);

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