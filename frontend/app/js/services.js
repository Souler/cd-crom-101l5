var cromServices = angular.module('cromServices', ['ngResource']);

cromServices
.factory('Utils', ['$location', '$http',
    function($location, $http) {
        var utils = {
            password_hash: function(username, password) {
                return CryptoJS.SHA512(username + ':' + password)
                        .toString(CryptoJS.enc.Base64)
                        .substring(0, 20);
            }
        }

        return utils;
    }
]);