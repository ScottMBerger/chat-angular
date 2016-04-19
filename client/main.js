import angular from 'angular';
import angularMeteor from 'angular-meteor';
import hashtags from './hashtags';
import messages from './messages';


var app = angular.module('simple-todos', [
  angularMeteor,
  hashtags.name,
  messages.name,
  
]);
