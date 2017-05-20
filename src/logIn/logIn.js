/**
 * Created by NaxFast on 20.05.2017.
 */
(function () {
    'use strict';
    angular.module('app')
        .directive('logIn', logIn);
    angular.module('app')
        .controller('LogInCtrl', LogInCtrl);

    function logIn() {
        return {
            scope: true,
            restrict: 'E',
            controller: 'LogInCtrl',
            templateUrl: '../src/logIn/logIn.html'
        };
    }

    function LogInCtrl($scope) {

        $scope.enter = function () {
            console.log("EnterWorking");

        }
    }
})();