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

    function LogInCtrl($scope, $location, socket) {

        $scope.enter = function (nickname) {
            socket.emit('event~log_in', {nickname: nickname});
            // $location.path("chat-room");
        };

        socket.emit('event~connection_test');
        socket.on('event~connection_test', function () {
            console.log("Connection test complete!");
        });

        socket.on('event~nickname_exist', function () {
            console.log("Pleasea change nickname");
        });

        socket.on('event~log_in_status', function (data) {
            if (data.notification === "User exist please change nickname") {

            } else {
                $location.path("chat-room");
            }
        });

    }
})();