(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.menuItems = "";
	$scope.message = "";

  $scope.onClickCheck = function () {
  	var itemsCount = $scope.menuItems.split(',').length;

  	if ($scope.menuItems.length == 0){
  		$scope.message = "Please enter data first";
  	}
  	else{ 
  		$scope.message = (itemsCount <= 3) ? "Enjoy!" : "Too much!";
  	}
  };	

}

})();
