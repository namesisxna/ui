(function(){
var app=angular.module("HomePageView");

var HomePageController = function($scope){
	  
	  	    $scope.HomePage=function(){
	    	$location.path("/");
	  }
	  	    }
app.controller("HomePageController" , ["$scope", HomePageController]);

}());

