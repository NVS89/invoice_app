(function () {
    'use strict';
    angular
        .module('invoiceApp')
        .factory('invoiceFactory', invoiceFactory);

    invoiceFactory.$inject = ['$http'];

    function invoiceFactory($http) {
        var invoiceFactory ={};
        var invoiceUrl = '/api/invoices';
        invoiceFactory.getInvoices = function () {
            return $http.get(invoiceUrl);
        };
        invoiceFactory.getInvoice = function (id) {
            return $http.get( invoiceUrl + id);
        };
        invoiceFactory.addInvoice = function (body) {
            return $http.post(invoiceUrl,body);
        };
        invoiceFactory.updateInvoice = function (id,body) {
            return $http.put(invoiceUrl + id, body);
        };
        invoiceFactory.deleteInvoice = function (id) {
            return $http.delete(invoiceUrl + id);
        };
        return invoiceFactory
    }
})();