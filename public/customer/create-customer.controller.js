(() => {

    'use strict';

    angular
        .module('customer')
        .controller('CreateCustomerController', CreateCustomerController);

        CreateCustomerController.$inject = ['$scope', '$location', 'CustomerService'];

    function CreateCustomerController($scope, $location, CustomerService) {
        
        $scope.title = 'Create customer';

        $scope.create = () => {};

        activate();

        function activate() {
            
            angular.element("#name").focus();
            
            $scope.create = create;

            function create() {
                CustomerService.save($scope.customer, success, failure);

                function success(res) {
                    $location.url('/customers');
                }
    
                function failure(error) {
                    console.log(error);
                }
            }

        }

    }

})();