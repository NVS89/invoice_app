(function () {
    'use strict';

    angular
        .module('invoiceApp')
        .controller('invoicesController', invoicesController);

    //Add List controller
    invoicesController.$inject = ['invoiceFactory','customerFactory','invoiceItemFactory','productFactory'];

    function invoicesController(invoiceFactory,customerFactory,invoiceItemFactory,productFactory) {
        var vm =this;
        vm.newProduct ={};
        vm.selectedProducts=[];
        vm.totalAmount = 0;

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
        vm.addNewProduct = function () {
            if(!angular.equals(vm.newProduct,{})){
                productFactory.addProduct(vm.newProduct).then(function (response) {
                    vm.getProducts();
                }, function (error) {
                    console.log(error);
                })
            }
        };
        vm.addNewCustomer = function () {
            if(!angular.equals(vm.newCustomer,{})){
                customerFactory.addCustomer(vm.newCustomer).then(function (response) {
                    vm.getCustomers();
                }, function (error) {
                    console.log(error);
                })
            }
        };

        vm.invoiceFullfillment = function () {
            angular.forEach(vm.products, function (value,key) {
                if(value.selected){
                    vm.selectedProducts.push(value);
                }
            })
        };
        vm.totalAmountSumm = function () {
            vm.totalAmount = 0;
            angular.forEach(vm.selectedProducts, function (value,key) {
                if(value.quantity){
                    vm.totalAmount = parseFloat(vm.totalAmount + value.quantity*(value.price*(1 -value.discount / 100))).toFixed(2);
                    console.log(typeof vm.totalAmount)
                }
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