var cromControllers = angular.module('cromControllers', []);

cromControllers
.controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'Utils',
    function ($scope, $rootScope, $location, Utils) {
        $scope.login = function() {
            var hash = Utils.password_hash($scope.username, $scope.password);

            $rootScope.user = {
                'nombre': "Fulano",
                'apellidos' : "Mengano Tungano",
                'nick':  "Meng",
                'email': "soulerhyd@gmail.com",
                'numero_telefono': 666334466,
                'fecha_registro': Date.now(),
                'ultima_renovacion': Date.now(),
                'renovaciones': [
                    Date.now(),
                    Date.now() + 1
                ]
            };
            $location.path('/me');
        }
    }
])
.controller('HomeCtrl', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.user = $rootScope.user;
    }
])
.controller('ProfileCtrl', ['$scope', '$rootScope',
    function ($scope, $rootScope) {

    }
])  
.controller('MemberListCtrl', ['$scope', '$rootScope',
    function ($scope, $rootScope) {

    }
]);