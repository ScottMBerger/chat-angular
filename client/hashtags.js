import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './hashtags.html';
import { Mongo } from 'meteor/mongo';
import { Texts } from '../api/texts.js';

class HashesCtrl {
    getHashArray() {
       var hashes = [];
        function insertion(item, index) {
          if (item.text.match(/#\w+/g)) {
            item.text.match(/#\w+/g).forEach(function(spec) {
              if (!hashes.includes(spec)) {
                hashes.push(spec);
              }
            });
          }
        }
        Texts.find({}).forEach(insertion);
        return hashes;
    }
    
    constructor($scope, $rootScope, $timeout) {
        $scope.setHash = function(hash) {
            $rootScope.currentHashtag = $rootScope.currentHashtag != hash ? hash : '';
              $timeout(function(){
                $("#chat").scrollTop($("#chat")[0].scrollHeight);
              }, 450);
        };
        
        $scope.viewModel(this);
        this.helpers({
          hashtags() {
            return this.getHashArray();
          }
        });
    }
}
 
export default angular.module('hashtags', [angularMeteor])
  .component('hashtags', {
    templateUrl: 'client/hashtags.html',
    controller: ['$scope', '$rootScope','$timeout', HashesCtrl]
  });