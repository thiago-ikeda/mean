(() => {

    'use strict';

    angular
        .module('customer')
        .controller('EditCustomerController', EditCustomerController);

        EditCustomerController.$inject = ['$scope', '$location', '$routeParams', 'CustomerService'];

    function EditCustomerController($scope, $location, $routeParams, CustomerService) {
        
        $scope.title = 'Edit customer';

        $scope.customer = {};
        $scope.customer.name  = '';
        $scope.customer.eMail = '';
        $scope.customer.code  = '';

        $scope.update = () => {};
        $scope.remove = () => {};

        activate();

        function activate() {

            angular.element("#name").focus();
            
            $scope.update = update;
            $scope.remove = remove;

            getCustomer();

            function getCustomer() {
                const id = $routeParams.id;
                CustomerService.get({id: id}, success, failure);
                
                function success(res) {
                    $scope.customer = res;
                }
            }

            function update() {
                CustomerService.update($scope.customer, success, failure);

                function success(res) {
                    $location.url('/customers');
                }
            }

            function remove() {
                const id = this.customer._id;
                CustomerService.remove({id: id}, success, failure);

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