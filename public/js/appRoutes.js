angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
        .when('/',{
                templateUrl: '/views/home.html'
        })
        .when('/:name*', {
            templateUrl: function(urlattr){
                return '/views/' + urlattr.name + '.html';
        }});

	$locationProvider.html5Mode(true);

}]);
        
