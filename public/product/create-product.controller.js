(() => {

    'use strict';

    angular
        .module('product')
        .controller('CreateProductController', CreateProductController);

        CreateProductController.$inject = ['$scope', '$location', 'ProductService'];

    function CreateProductController($scope, $location, ProductService) {
        
        $scope.title = 'Create product';

        $scope.create = () => {};

        activate();

        function activate() {
            
            angular.element("#description").focus();
            
            $scope.create = create;

            function create() {
                ProductService.save($scope.product, success, failure);

                function success(res) {
                    $location.url('/products');
                }
    
                function failure(error) {
                    console.log(error);
                }
            }

        }

    }

})();