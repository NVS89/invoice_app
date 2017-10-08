(function () {
    'use strict';
    angular
        .module('invoiceApp')
        .factory('productFactory', productFactory);

    productFactory.$inject = ['$http'];

    function productFactory($http) {
        var productFactory ={};
        var productUrl = '/api/products/';
        productFactory.getProducts = function () {
            return $http.get(productUrl);
        };
        productFactory.getProduct = function (id) {
            return $http.get( productUrl + id);
        };
        productFactory.addProduct = function (body) {
            return $http.post(productUrl,body);
        };
        productFactory.updateProduct = function (body) {
            return $http.put(productUrl + body.id, body);
        };
        productFactory.deleteProduct = function (id) {
            return $http.delete(productUrl + id);
        };
        return productFactory
    }
})();