(function(){
    'use strict';

    angular
        .module('starter')
        .controller('InspectController', InspectController);
    
    InspectController.$inject = ['$scope', '$log','erc'];
    function InspectController($scope, $log, erc){
        console.log(erc)
        var inspect = erc;
        var vm = this;
        vm.inspectData = {};
        vm.inspectData.publication = inspect;
        vm.inspectData.data = inspect.metadata.o2r.inputfiles;
        vm.inspectData.code = inspect.metadata.o2r.codefiles;
        
    }
})()