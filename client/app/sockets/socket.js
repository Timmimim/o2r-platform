(function(){
    'use strict';

    angular
        .module('starter')
        .factory('socket', socket);

    socket.$inject = ['$log', '$rootScope'];

    function socket($log, $rootScope){
        /* eslint-disable no-undef */
        var socket = io('http://localhost/api/v1/logs/job');
        /* eslint-enable no-undef */
        socket.on('connect', function(){
            $log.debug('connected');
        });
        var socketFct = {
            on: socketOn,
            emit: socketEmit
        };

        return socketFct;

        ///////////

        function socketOn(eventName, callback){
            socket.on(eventName, function(){
                var args = arguments;
                $rootScope.$apply(function(){
                    callback.apply(socket, args);
                });
            });
        }

        function socketEmit(eventName, data, callback){
            socket.emit(eventName, data, function(){
                var args = arguments;
                $rootScope.$apply(function(){
                    if(callback){
                        callback.apply(socket, args);
                    }
                });
            });
        }

    }
})();