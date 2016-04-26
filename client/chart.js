import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './chart.html';
import { Mongo } from 'meteor/mongo';
import { Texts } from '../api/texts.js';
console.log(String.fromCharCode("z".charCodeAt(0)+1));
class ChartCtrl {
  getArray = function(data) {
    function getNext(char) {
      return String.fromCharCode(char.charCodeAt(0) + 1);
    };
    function getOccurrences(str, char) {
      return (str.match(new RegExp(char, "g")) || []).length;
    };
    function getList() {
      return Texts.find({});
    }
    var table = [];
    var char = 'a';
    while (char != "{") {
      if (data) {
        var count = 0;
        function counter(item, index) {
          count = count + getOccurrences(item.text.toLowerCase(), char);
        }
        getList().forEach(counter);
      }
      table.push(data ? count : char);
      char = getNext(char);
    }

    return table;
  };
  constructor($scope, $rootScope, $timeout,$reactive) {
      //$scope.series = ['Series A', 'Series B'];
      $scope.viewModel(this);
      this.helpers({
        labels() {
          return this.getArray(false);
        },
        data() {
          return this.getArray(true);
        }
      });
    }
}

export default angular.module('chart', [angularMeteor, 'chart.js'])
  .component('chart', {
    templateUrl: 'client/chart.html',
    controller: ['$scope', '$rootScope', '$timeout','$reactive', ChartCtrl]
  });
