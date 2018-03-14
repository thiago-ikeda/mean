(() => {

    'use strict';

    angular
        .module('customer')
        .factory('CustomerService', CustomerService);

        CustomerService.$inject = ['$resource'];

    function CustomerService($resource) {

        return $resource('api/customer/:id', null, {
            'update': { method: 'PUT' }
        });

    }

})();