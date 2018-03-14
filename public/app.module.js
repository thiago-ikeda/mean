(() => {

    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'main',
            'customer',
            'product',
            'order'
        ]);
    
})();