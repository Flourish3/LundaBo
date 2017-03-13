angular.module('MainCtrl', [])
.controller('MainController',
[ '$scope', 'Tenants','$http','$rootScope','$window', '$location', 'AuthenticationService',
function($scope,Tenants,$http,$rootScope,$window, $location, AuthenticationService){

	$scope.tagline = 'To the moon and back!';
	Tenants.then(function(data){
			$scope.tenants = data.data;
		});

	$scope.remove = function(index){

		$http.delete('/delete_tenant/'+$scope.tenants[index]._id)
			.then(function(response){
				$window.location.reload();
			});
	}

	AuthenticationService.ClearCredentials();

	$scope.login = function () {
		$scope.dataLoading = true;
		AuthenticationService.Login($scope.username, $scope.password, function(response) {
			if(response.success) {
				AuthenticationService.SetCredentials($scope.username, $scope.password);
				$location.path('/');
			} else {
				$scope.error = response.message;
				$scope.dataLoading = false;
			}
		});
	}
	
}]);