(() => {

    'use strict';

    angular
        .module('order')
        .controller('CreateOrderController', CreateOrderController);

        CreateOrderController.$inject = ['$scope', '$routeParams', '$location', 'CustomerService', 'ProductService', 'OrderService'];

    function CreateOrderController($scope, $routeParams, $location, CustomerService, ProductService, OrderService) {
        
        $scope.title = 'Create order';

        $scope.productList        = [];
        $scope.currentOrder       = {};
        $scope.currentOrder.items = [];

        $scope.add    = () => {};
        $scope.create = () => {};
        $scope.remove = () => {};

        activate();

        function activate() {
            
            angular.element("#product").focus();

            $scope.add    = add;
            $scope.create = create;
            $scope.remove = remove;

            getCustomer();
            getProductList();

            function getCustomer() {
                const idCustomer = $routeParams.idCustomer;

                CustomerService.get({id: idCustomer}, success, failure);

                function success(res) {
                    $scope.customer = res;
                }
            }

            function getProductList() {
                ProductService.query(success, failure);

                function success(res) {
                    $scope.productList = res;
                }
            }

            function add() {
                const orderItem = {
                    product: $scope.selectedProduct,
                    amount : $scope.selectedProductAmount
                }

                $scope.currentOrder.items.push(orderItem);

                removeProductFromProductList($scope.selectedProduct._id);
                resetFields();

                function removeProductFromProductList(idProduct) {
                    const index = $scope.productList.map(getProductId).indexOf(idProduct);
                    $scope.productList.splice(index, 1);

                    function getProductId(o) {
                        return o._id;
                    }
                }

                function resetFields() {
                    $scope.selectedProduct       = null;
                    $scope.selectedProductAmount = '';

                    angular.element("#product").focus();
                }
            }

            function remove(idProduct) {
                const index = $scope.currentOrder.items.map(getProductId).indexOf(idProduct);

                addProductToProductList(index);

                $scope.currentOrder.items.splice(index, 1);

                function getProductId(o) {
                    return o.product._id;
                }

                function addProductToProductList(index) {
                    $scope.productList.push($scope.currentOrder.items[index].product);
                }
            }

            function create() {
                buildOrder();
                
                OrderService.update($scope.customer, success, failure);

                function buildOrder() {
                    const newOrderItems = [];
                    let newOrderItem    = {};
                    
                    $scope.currentOrder.items.forEach(item => {
                        newOrderItem = {};

                        newOrderItem.product = item.product._id;
                        newOrderItem.amount  = item.amount;

                        newOrderItems.push(newOrderItem);
                    });
                    
                    const newOrder = {};
                    newOrder.items = [];
                    newOrder.items = newOrderItems;

                    $scope.customer.orders.push(newOrder);
                }

                function success(res) {
                    $location.url('/customers');
                }
            }

            function failure(error) {
                console.error(error);
            }

        }

    }

})();