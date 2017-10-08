(function () {
    'use strict';
    angular
        .module('invoiceApp')
        .factory('customerFactory', customerFactory);

    customerFactory.$inject = ['$http'];

    function customerFactory($http) {
        var customerFactory ={};
        var customerUrl = '/api/customers/';
        customerFactory.getCustomers = function () {
            return $http.get(customerUrl);
        };
        customerFactory.getCustomer = function (id) {
            return $http.get( customerUrl + id);
        };
        customerFactory.addCustomer = function (body) {
            return $http.post(customerUrl,body);
        };
        customerFactory.updateCustomer = function (body) {
            console.log(body);
            return $http.put(customerUrl + body.id, body);
        };
        customerFactory.deleteCustomer = function (id) {
            return $http.delete(customerUrl + id);
        };
        return customerFactory
    }
})();