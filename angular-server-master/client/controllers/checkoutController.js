//navController: controlls the navbar.html page. 
var app=angular.module('pakit');

app.controller('checkoutController', 
	function($state,$scope,APIService,UserService,$stateParams) {

		$scope.pakit_cost = 460;
		$scope.sub_charges = 40;
		$scope.insurance_charges = 6;

		var pricing_locale = $scope.pakit_cost + $scope.sub_charges;
		$scope.total_payable = pricing_locale;

		$scope.recalculate_pricing = function(){
			if($scope.insurance_checked){
				$scope.total_payable = pricing_locale + $scope.insurance_charges;
			}else{
				$scope.total_payable = pricing_locale;
			}	
		}

		$scope.make_payment = function(){
			$state.go('landing');
		}

});



