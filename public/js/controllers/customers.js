(function () {
    'use strict';

    angular
        .module('invoiceApp')
        .controller('customersController', customersController);

    customersController.$inject = ['$scope','customerFactory'];

    function customersController($scope,customerFactory) {
        var vm =this;
        vm.data = {};
        vm.getCustomers = function () {
            customerFactory.getCustomers().then(function (response) {
                vm.data = response.data;
            },function (error) {
                console.log(error);
            })
        };
        function initCustomer() {
            vm.getCustomers()
        }
        initCustomer();
        vm.modifyCustomer = function (id) {
            vm.currentCustomer = {};
            angular.forEach(vm.data, function (value,key) {
                if(id == value.id){
                    vm.currentCustomer = angular.copy(value,{});
                }
            });
        };
        vm.updateCustomer = function () {
            customerFactory.updateCustomer(vm.currentCustomer).then(function (response) {
                vm.getCustomers();
            },function (error) {
                console.log(error);
            })
        }
    }
})();