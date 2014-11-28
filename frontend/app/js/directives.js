var cromDirectives = angular.module('cromDirectives', []);

cromDirectives
.directive('moment',
    function() {
        return {
            scope: {
                moment: '@',
                format: '&',
                ago: '&',
                noAgo: '&',
            },
            templateUrl: '/app/partials/directives/moment.html',
            link: function($scope, element, attrs) {
                attrs.$observe('moment', function(value){
                    var showAgo = true;

                    if (attrs.noAgo !== undefined) {
                        if (attrs.noAgo.length > 0)
                            showAgo = eval(attrs.noAgo)
                        else
                            showAgo = false;
                    }

                    if (value)
                    {
                        value = Number(value) / 1000;
                        $scope.dateStr = moment.unix(value).format( attrs.format || 'lll');
                        $scope.dateAgo = showAgo ? moment.unix(value).fromNow() : $scope.dateStr;

                        $scope.dateUI = $scope.dateAgo;
                    }
                });
            }
        }
    }
);

