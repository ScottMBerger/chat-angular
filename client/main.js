import angular from 'angular';
import angularMeteor from 'angular-meteor';
import messages from './messages';
import hashtags from './hashtags';

angular.module('simple-todos', [
  angularMeteor,
  messages.name,
  hashtags.name
]);