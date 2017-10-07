(function () {
    'use strict';
    angular
        .module('invoiceApp')
        .factory('invoiceItemFactory', invoiceItemFactory);

    invoiceItemFactory.$inject = ['$http'];

    function invoiceItemFactory($http) {
        var invoiceItemFactory ={};
        var invoiceUrl = '/api/invoices/';
        invoiceItemFactory.getInvoiceItemItems = function (invoiceId) {
            return $http.get(invoiceUrl+invoiceId+'/items');
        };
        invoiceItemFactory.getInvoiceItem = function (invoiceId,itemId) {
            return $http.get( invoiceUrl + invoiceId+'/items/'+itemId);
        };
        invoiceItemFactory.addInvoiceItem = function (invoiceId,body) {
            return $http.post(invoiceUrl+invoiceId+'/items',body);
        };
        invoiceItemFactory.updateInvoiceItem = function (invoiceId,itemId,body) {
            return $http.put(invoiceUrl + invoiceId+'/items/'+itemId, body);
        };
        invoiceItemFactory.deleteInvoiceItem = function (invoiceId,itemId) {
            return $http.delete(invoiceUrl + invoiceId +'/items/'+itemId);
        };
        return invoiceItemFactory
    }
})();