var cromApp = angular.module('cromApp',
[
    // Included angular Dependencies
    'ngRoute',
    //'ngAnimate',
    // Third party dependencies
    'angular-loading-bar',
    'monospaced.elastic',
    // Self Dependencies
    'cromControllers',
    'cromServices',
    'cromDirectives'
]);

cromApp
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/login', {
                templateUrl: '/app/partials/login.html',
                controller: 'LoginCtrl'
            })
            .when('/', {
                templateUrl: '/app/partials/home.html',
                controller: 'HomeCtrl'
            })
            .when('/member/:memberid', {
                templateUrl: '/app/partials/profile.html',
                controller: 'ProfileCtrl'
            })
            .when('/me', {
                templateUrl: '/app/partials/profile.html',
                controller: 'ProfileCtrl'
            })
            .when('/socios', {
                templateUrl: '/app/partials/memberslist.html',
                controller: 'MemberListCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
])
.run(['$rootScope', '$location',
    function($rootScope, $location) {
        var checkLogin = function(event, next, current) {
          if (!$rootScope.user) {
            // no logged user, redirect to /login
            if ( next.templateUrl !== "/app/partials/login.html")
              $location.path("/login");
          }
        };

        $rootScope.$on( "$routeChangeStart", checkLogin);
    }
]);
