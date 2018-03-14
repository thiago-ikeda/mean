(() => {

    'use strict';

    angular
        .module('order')
        .controller('GetAllOrdersController', GetAllOrdersController);

        GetAllOrdersController.$inject = ['$scope', '$location', '$routeParams', 'CustomerService'];

    function GetAllOrdersController($scope, $location, $routeParams, CustomerService) {
        
        $scope.title = 'Customer orders';

        $scope.viewItems = () => {};
        $scope.back      = () => {};

        activate();

        function activate() {
            
            $scope.viewItems = viewItems;
            $scope.back      = back;

            getCustomer();

            function getCustomer() {
                const idCustomer = $routeParams.idCustomer;

                CustomerService.get({id: idCustomer}, success, failure);

                function success(res) {
                    $scope.customer = res;
                }

                function failure(error) {
                    console.error(error);
                }
            }

            function viewItems(idOrder) {
                const idCustomer = $routeParams.idCustomer;
                
                $location.url('/customer/' + idCustomer + '/order/' + idOrder);
            }

            function back() {
                $location.url('/customers');
            }

        }

    }

})();