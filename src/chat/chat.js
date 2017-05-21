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

    function ChatCtrl($scope, $routeParams, localStorageService, socket, $location) {

        // initialization
        $scope.currentUser = JSON.parse(localStorageService.get("chatUser"));

        if ($scope.currentUser === null) {
            $location.path("/");
        }

        $scope.privateMessages = [];
        $scope.partnerNickname = $routeParams.nickname;

        // socket events
        socket.on('event~new_private_message', function (data) {
            console.log(data);
            $scope.privateMessages.push(data);
        });

        // functions
        $scope.sendMessage = function (messageText) {
            if (messageText.length > 0) {
                var message = {
                    text: messageText,
                    author: $scope.currentUser.nickname,
                    receiver: $scope.partnerNickname
                };
                socket.emit('event~new_private_message', {message: message});
                $scope.newMessage = "";
            }
        };

        $scope.goBack = function () {
            $location.path("chat-room");
        }


    }
})();