import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './messages.html';
import { Mongo } from 'meteor/mongo';
import { Texts } from '../api/texts.js';

class MessagesCtrl {
    constructor($scope, $rootScope) {
        $scope.viewModel(this);
        
        this.helpers({
          texts() {
            return Texts.find({});
          }
        });
    }
    addMessage(newMessage) {
        // Insert a task into the collection
        Texts.insert({
          text: newMessage,
          createdAt: new Date
        });
     
        // Clear form
        this.newMessage = '';
    }
}
 
export default angular.module('messages', [angularMeteor])
  .component('messages', {
    templateUrl: 'client/messages.html',
    controller: ['$scope','$rootScope', MessagesCtrl]
  });