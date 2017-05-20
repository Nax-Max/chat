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

    function ChatRoomCtrl($scope, socket) {

        $scope.sendMessage = function () {
            function soundClick() {
                var audio = new Audio(); // Создаём новый элемент Audio
                audio.src = 'click.mp3'; // Указываем путь к звуку "клика"
                audio.autoplay = true; // Автоматически запускаем
            }
            console.log("sendMessage");
        };





    }
})();
