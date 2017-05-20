/**
 * Created by NaxFast on 20.05.2017.
 */
(function () {
    'use strict';
    angular.module('app')
        .directive('chat', chat);
    angular.module('app')
        .controller('ChatCtrl', ChatCtrl);

    function chat() {
        return {
            scope: true,
            restrict: 'E',
            controller: 'ChatCtrl',
            templateUrl: '../src/chat/chat.html'
        };
    }

    function ChatCtrl($scope) {

        $scope.sendMessage = function () {console.log("sendMessage");}


    }
})();