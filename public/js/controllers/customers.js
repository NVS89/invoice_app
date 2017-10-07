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

    }
})();