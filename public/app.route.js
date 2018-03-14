(() => {

    'use strict';

    angular
        .module('app')
        .config(Config);

        Config.$inject = ['$routeProvider', '$locationProvider'];

    function Config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when('/', {
                templateUrl : 'main/main.html',
                controller  : 'MainController',
                controllerAs: 'Main'
            })
            .when('/customers', {
                templateUrl : 'customer/get-all-customers.html',
                controller  : 'GetAllCustomersController',
                controllerAs: 'GetAllCustomers'
            })
            .when('/customer', {
                templateUrl : 'customer/create-customer.html',
                controller  : 'CreateCustomerController',
                controllerAs: 'CreateCustomer'
            })
            .when('/customer/:id', {
                templateUrl : 'customer/edit-customer.html',
                controller  : 'EditCustomerController',
                controllerAs: 'EditCustomer'
            })
            .when('/customer/:idCustomer/order', {
                templateUrl : 'order/create-order.html',
                controller  : 'CreateOrderController',
                controllerAs: 'CreateOrder'
            })
            .when('/customer/:idCustomer/orders', {
                templateUrl : 'order/get-all-orders.html',
                controller  : 'GetAllOrdersController',
                controllerAs: 'GetAllOrders'
            })
            .when('/customer/:idCustomer/order/:idOrder', {
                templateUrl : 'order/view-order.html',
                controller  : 'ViewOrderController',
                controllerAs: 'ViewOrder'
            })
            .when('/products', {
                templateUrl : 'product/get-all-products.html',
                controller  : 'GetAllProductsController',
                controllerAs: 'GetAllProducts'
            })
            .when('/product', {
                templateUrl : 'product/create-product.html',
                controller  : 'CreateProductController',
                controllerAs: 'CreateProduct'
            })
            .when('/product/:id', {
                templateUrl : 'product/edit-product.html',
                controller  : 'EditProductController',
                controllerAs: 'EditProduct'
            });
    }
    
})();