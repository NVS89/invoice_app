(function () {
    'use strict';

    angular
        .module('invoiceApp', [
            'ui.router'
        ]).config(config);


    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/invoices');

        $stateProvider
            .state('invoices', {
                url: '/invoices',
                templateUrl: 'view/invoices.html',
                controller: 'invoicesController as invoices'
            })
            .state('customers', {
                url: '/customers',
                templateUrl: 'view/customers.html',
                controller: 'customersController as customers'
            })
            .state('products', {
                url: '/products',
                templateUrl: 'view/products.html',
                controller: 'productsController as products'
            });

        $locationProvider.html5Mode(true);
    }
})();