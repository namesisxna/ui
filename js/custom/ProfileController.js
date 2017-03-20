(function(){
var app=angular.module("HomePageView");
 alert("from profileController.js")

var ProfileController = function($scope,$location){
	  
    $scope.Profile=function(){
        $location.path("/Profile");
    	
  };
  
 
}
app.controller ("ProfileController" , ["$scope" , "$location"  , ProfileController])


}());

