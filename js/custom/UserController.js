(function(){
var app=angular.module("HomePageView");

var UserController = function($scope,$location){
	  
    $scope.Profile=function(){
    	$location.path("/Users");
  }
	
}
app.controller ("UserController" , ["$scope" , "$location" , UserController]);

}());

