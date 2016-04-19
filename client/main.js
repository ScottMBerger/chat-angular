import angular from 'angular';
import ngAnimate from 'angular-animate';
import angularMeteor from 'angular-meteor';
import hashtags from './hashtags';
import messages from './messages';


var app = angular.module('simple-todos', [
  angularMeteor,
  ngAnimate,
  hashtags.name,
  messages.name
]);
