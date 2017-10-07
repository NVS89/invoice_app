(function () {
    'use strict';

    angular
        .module('invoiceApp')
        .controller('productsController', productsController);

    //Add List controller
    productsController.$inject = ['$scope','productFactory'];

    function productsController($scope,productFactory) {
        var vm =this;
        vm.getProducts = function () {
            productFactory.getProducts().then(function (response) {
                vm.data = response.data;
            },function (error) {
                console.log(error);
            })
        };
        function initProduct() {
            vm.getProducts()
        }
        initProduct();

    }
})();