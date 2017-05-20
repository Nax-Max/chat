/**
 * Created by NaxFast on 20.05.2017.
 */
(function () {
    'use strict';
    angular.module('app')
        .directive('chatRoom', chatRoom);
    angular.module('app')
        .controller('ChatRoomCtrl', ChatRoomCtrl);

    function chatRoom() {
        return {
            scope: true,
            restrict: 'E',
            controller: 'ChatRoomCtrl',
            templateUrl: '../src/chatRoom/chatRoom.html'
        };
    }

    function ChatRoomCtrl($scope, $location, localStorageService, socket) {

        // initialization
        $scope.messages = [];
        $scope.userList = [];

        $scope.user = JSON.parse(localStorageService.get("chatUser"));

        if (!$scope.user || !$scope.user.token) {
            $location.path("/");
        }

        // socket events
        socket.on('event~new_message', function (data) {
            $scope.messages.push(data.message);
            console.log("Connection test complete!");
        });

        socket.emit('event~get_chat_list', {});
        socket.on('event~get_chat_list', function (data) {
            $scope.userList = data.userList;
            console.log(data);
            console.log($scope.userList);

        });

        // functions
        $scope.sendMessage = function (messageText) {
            if (messageText.length > 0) {
                var message = {text: messageText, author: $scope.user.nickname};
                socket.emit('event~new_message', {message: message});
                $scope.newMessage = "";
            }
        };

        $scope.logOut = function () {
            localStorageService.remove("chatUser");
            socket.emit('event~log_out', {nickname: $scope.user.nickname});
            $location.path("/");
        };

    }
})();
