//var app = angular.module('myApp', []);
var app = angular.module('myApp', ["GradSchool"]);

app.controller('test_controller', ['$scope', function ($scope) {
	$scope.textInput = "Hello";
}]);

app.controller('msim_controller', ['$scope', function ($scope) {
	$scope.details = {};
	//$scope.details = {"name": "Hayagriv", "specialization": "UX", "phno": "2063307817"};
	$scope.specialization = [{"val":"DS", "label" : "Data Science"}, {"val":"UX", "label" : "User Experience"}, {"val":"IS", "label" : "Information Security"}];
	$scope.clearAllValues = function () {
		$scope.details = {};
	};
}]);