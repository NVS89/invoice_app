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
        vm.modifyProduct = function (id) {
            vm.currentProduct = {};
            angular.forEach(vm.data, function (value,key) {
                if(id == value.id){
                    vm.currentProduct = angular.copy(value,{});
                }
            });
        };
        vm.updateProduct = function () {
            if (!angular.equals(vm.currentCustomer, {})) {
                productFactory.updateProduct(vm.currentProduct).then(function (response) {
                    vm.getProducts();
                }, function (error) {
                    console.log(error);
                })
            }
        }
    }
})();