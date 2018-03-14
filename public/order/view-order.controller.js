(() => {

    'use strict';

    angular
        .module('order')
        .controller('ViewOrderController', ViewOrderController);

        ViewOrderController.$inject = ['$scope', '$location', '$routeParams', 'CustomerService'];

    function ViewOrderController($scope, $location, $routeParams, CustomerService) {
        
        $scope.title = 'Customer order';

        $scope.currentOrder = {};

        $scope.back = () => {};

        activate();

        function activate() {
            
            $scope.back = back;

            getCustomer();

            function getCustomer() {
                const idCustomer = $routeParams.idCustomer;
                const idOrder    = $routeParams.idOrder   ;

                CustomerService.get({id: idCustomer}, success, failure);

                function success(res) {
                    $scope.customer     = res;
                    $scope.currentOrder = $scope.customer.orders.find( (order) => { return order._id == idOrder; } )
                }

                function failure(error) {
                    console.error(error);
                }
            }

            function back() {
                const idCustomer = $routeParams.idCustomer;
                
                $location.url('/customer/' + idCustomer + '/orders');
            }

        }

    }

})();