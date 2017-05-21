/**
 * Created by NaxFast on 20.05.2017.
 */
(function () {
    'use strict';
    var main = angular.module('app', ['ngRoute', 'ysilvela.socket-io', 'LocalStorageModule']);

    main.factory('socket', function (socketFactory) {
        return socketFactory({
            prefix: 'event~',
            ioSocket: io.connect('52.179.9.188:3333')
        });
    });

    //-----------------------------------------------------------------------------------------------------------Routing
    main.config(['$routeProvider', 'localStorageServiceProvider', function ($routeProvider, localStorageServiceProvider) {

        localStorageServiceProvider
            .setPrefix('Nasim-Chat');

        localStorageServiceProvider
            .setStorageType('localStorage');

        $routeProvider
            .when('/', {
                template: '<log-in></log-in>'
            })

            .when('/chat-room', {
                template: '<chat-room></chat-room>'
            })

            .when('/chat/:nickname', {
                template: '<chat></chat>'
            });

        $routeProvider.otherwise({redirectTo: ''});
    }]);
    //---------------------------------------------------------------------------------------------------------------End

    main.controller('AppCtrl', function ($scope) {
    });

})
();