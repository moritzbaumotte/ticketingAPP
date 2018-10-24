app.controller('loginCtrl', function($scope, $window){
	$scope.user = {email: "", password: ""};
	$scope.login = function(){
		
		$.ajax({
			url: "http://localhost:8081/login/rest/authService",
			type: "POST",
			contentType: "application/json",
			data: JSON.stringify($scope.user),
			success: function(data) {
				console.log(data);
			},
			error: function(data) {
				console.log(data);
			}
		});
		
		localStorage.setItem("user", JSON.stringify($scope.user));
		$window.location.href = '/ticketing_app/#!/overview';
	}
});