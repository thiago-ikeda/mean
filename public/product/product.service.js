(() => {

    'use strict';

    angular
        .module('product')
        .factory('ProductService', ProductService);

        ProductService.$inject = ['$resource'];

    function ProductService($resource) {

        return $resource('api/product/:id', null, {
            'update': { method: 'PUT' }
        });

    }

})();