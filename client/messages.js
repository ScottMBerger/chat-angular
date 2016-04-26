import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './messages.html';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Texts } from '../api/texts.js';

class MessagesCtrl {
    constructor($scope, $rootScope, $timeout) {
        $scope.viewModel(this);
        this.subscribe('texts');
        this.helpers({
          texts() {
            return Texts.find({});
          }
        });
    }
    addMessage(newMessage) {
        // Insert a message into the collection
        Texts.insert({
          text: newMessage,
          createdAt: new Date,
          owner: Meteor.userId(),
          username: Meteor.user() ? Meteor.user().username : "Anonymous"
        });

        // Clear form
        this.newMessage = '';
    }
}

export default angular.module('messages', [angularMeteor])
  .component('messages', {
    templateUrl: 'client/messages.html',
    controller: ['$scope','$rootScope','$timeout', MessagesCtrl]
  });
