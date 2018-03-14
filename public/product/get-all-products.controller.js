(() => {

    'use strict';

    angular
        .module('product')
        .controller('GetAllProductsController', GetAllProductsController);

        GetAllProductsController.$inject = ['$scope', '$location', 'ProductService'];

    function GetAllProductsController($scope, $location, ProductService) {
        
        $scope.title = 'Products';
        
        $scope.products = {};

        $scope.edit = () => {};

        activate();

        function activate() {
            
            $scope.edit = edit;

            getAllProducts();

            function getAllProducts() {
                ProductService.query(success, failure);

                function success(res) {
                    $scope.products = res;
                }

                function failure(error) {
                    console.log(error);
                }
            }
            
            function edit() {
                $location.url('product/' + this.product._id);
            }

        }

    }

})();