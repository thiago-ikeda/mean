(() => {

    'use strict';

    angular
        .module('order')
        .factory('OrderService', OrderService);

        OrderService.$inject = ['$resource'];

    function OrderService($resource) {

        return $resource('api/customer/:idCustomer/order/:idOrder', { idCustomer: '@_id' }, {
            'update': { method: 'PUT' }
        });

    }

})();