(function(){
var app=angular.module("HomePageView");
alert("from HomePageController.js")

var HomePageController = function($scope){
	  
	  	    $scope.HomePage=function(){
	    	$location.path("/");
	  }
	  	    }
app.controller("HomePageController" , ["$scope", HomePageController]);

}());

