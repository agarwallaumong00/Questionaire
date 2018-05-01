(function() {
    'use strict';

    var myApp = angular.module('finomena', ['ngMaterial']);

    myApp.controller('finomenaController', ['$scope', function($scope) {
        var vm = $scope;

        vm.showDialogBox = true;
        vm.showQuestions = false;
        vm.index = 0;
        vm.showFinishDialog = false;
        vm.showAnswers = false;
        vm.selectedAnswer = []

        vm.questionArr = [
            'What is your name?',
            'What is your age?',
            'What is you pet Name?'
        ];

        vm.answerArr = [
            ['John', 'Michael', 'Tony', 'None of the above'],
            ['21', '22', '23', '24'],
            ['cat', 'dog', 'spider', 'none of the above']
        ];

        vm.correctAnswersArr = ['John', '21', 'cat'];

        vm.saveUserName = function() {
            vm.showDialogBox = false;
            vm.showQuestions = true;            
        }

        vm.nextQuestion = function() {
            vm.index += 1;
        }

        vm.previousQuestion = function() {
            vm.index -= 1;
        }

        vm.finsih = function() {
            vm.showFinishDialog = true;            
        }

        vm.seeAnswers = function() {
            vm.showFinishDialog = false;
            vm.showQuestions = false;
            vm.showAnswers = true;
        }

        vm.radioBtnSelected = function(index, ans) {
            vm.selectedAnswer[index] = ans;
        }

        vm.reset = function() {
            window.location.reload();
            vm.showAnswers = false;            
            vm.showQuestions = true;
            vm.index = 0;
        }
    }])
})()