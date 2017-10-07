(function () {
    'use strict';

    angular
        .module('invoiceApp')
        .controller('invoicesController', invoicesController);

    //Add List controller
    invoicesController.$inject = ['invoiceFactory','customerFactory','invoiceItemFactory','productFactory'];

    function invoicesController(invoiceFactory,customerFactory,invoiceItemFactory,productFactory) {
        var vm =this;
        vm.getInvoices = function () {
            invoiceFactory.getInvoices().then(function (response) {
                vm.data = response.data;
            },function (error) {
                console.log(error);
            })
        };
        vm.getInvoiceItems = function (invoiceId) {
            invoiceItemFactory.getInvoiceItemItems(invoiceId).then(function (response) {
                console.log(response.data);
            },function (error) {
                console.log(error);
            })
        };
        vm.getCustomers = function () {
            customerFactory.getCustomers().then(function (response) {
                vm.customers = response.data;
            },function (error) {
                console.log(error);
            })
        };
        vm.getProducts = function () {
            productFactory.getProducts().then(function (response) {
                vm.products = response.data;
            },function (error) {
                console.log(error);
            })
        };
        function initInvoices() {
            vm.getInvoices();
            vm.getCustomers();
            vm.getProducts();
        }
        initInvoices();

    }
})();