(() => {

    'use strict';

    angular
        .module('main')
        .controller('MainController', MainController);

        MainController.$inject = ['$scope'];

    function MainController($scope) {
        
        activate();

        function activate() {
        }

    }

})();