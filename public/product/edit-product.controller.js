(() => {

    'use strict';

    angular
        .module('product')
        .controller('EditProductController', EditProductController);

        EditProductController.$inject = ['$scope', '$location', '$routeParams', 'ProductService'];

    function EditProductController($scope, $location, $routeParams, ProductService) {
        
        $scope.title = 'Edit product';

        $scope.product              = {};
        $scope.product.description  = '';

        $scope.update = () => {};
        $scope.remove = () => {};

        activate();

        function activate() {

            angular.element("#description").focus();
            
            $scope.update = update;
            $scope.remove = remove;

            getProduct();

            function getProduct() {
                const id = $routeParams.id;
                ProductService.get({id: id}, success, failure);
                
                function success(res) {
                    $scope.product = res;
                }
            }

            function update() {
                ProductService.update($scope.product, success, failure);

                function success(res) {
                    $location.url('/products');
                }
            }

            function remove() {
                const id = this.product._id;
                ProductService.remove({id: id}, success, failure);

                function success(res) {
                    $location.url('/products');
                }
            }

            function failure(error) {
                console.error(error);
            }
            
        }

    }

})();