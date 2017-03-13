angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'	
		})

		.when('/tenats', {
			templateUrl: 'views/listTenants.html',
			controller: 'TenantsController'	
		})
		
		.when('/tenantNew',{
			templateUrl: 'views/newTenant.html',
			controller : 'NewUserController'
		})
		
		.when('/tenantCreated',{
			templateUrl: 'view/newusercreated.html',
			controller: 'NewUserController'
		});

	$locationProvider.html5Mode(true);

}]);