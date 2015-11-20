var gradSchoolapp = angular.module('GradSchool', []);

gradSchoolapp.directive('gradSchool', [function () {
	return {
			restrict: 'E',
			scope: {
				"givenSpecialization": "=",
				"studentDetails" : "=",
				"clearValues": "&"
			},
			
			//template: "<div>lalalalaal</div>",
			templateUrl: "client/HTML/msim_template.html",
			link: function ($scope, $element, $attr, ctrl, $transclude) {

			}
	};
}]);