(() => {

    'use strict';

    angular
        .module('customer')
        .controller('GetAllCustomersController', GetAllCustomersController);

        GetAllCustomersController.$inject = ['$scope', '$location', 'CustomerService'];

    function GetAllCustomersController($scope, $location, CustomerService) {
        
        $scope.title     = 'Customers';
        $scope.customers = {};

        $scope.edit        = () => {};
        $scope.createOrder = () => {};
        $scope.viewOrders  = () => {};

        activate();

        function activate() {
            
            $scope.edit        = edit;
            $scope.createOrder = createOrder;
            $scope.viewOrders  = viewOrders;

            getAllCustomers();

            function getAllCustomers() {
                CustomerService.query(success, failure);

                function success(res) {
                    $scope.customers = res;
                }

                function failure(error) {
                    console.log(error);
                }
            }
            
            function edit() {
                $location.url('customer/' + this.customer._id);
            }

            function createOrder() {
                $location.url('customer/' + this.customer._id + '/order');
            }
            
            function viewOrders() {
                $location.url('customer/' + this.customer._id + '/orders');
            }

        }

    }

})();