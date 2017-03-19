(function(){
var app=angular.module("HomePageView");

var ProfileController = function($scope,$location,$sce){
	  
    $scope.Profile=function(){
        $location.path("/Profile");
    	
  };
  
  $scope.data= $sce.trustAsHtml("<div><span><label>Access Token</label></span><p>bcd425a381771703b1c110e7d53005f3c83af6f9f8ae9a05bcdc72b764b949d759bc4e1fd177bb1a7c6f03c39abf1f69271de4bb134bdf5697f9b1cd250e5692</p><span><label>Refresh Token</label></span><p>a2ce3608897c3e4a3597ec202ee4fa83748fcd135d01f70c7980cef5785f691eaa86224a00cd4f4336331e9dcaabc24754d3bb79b3dd250f0480c67138f79985</p></div>") ;
}
app.controller ("ProfileController" , ["$scope" , "$location" , "$sce" , ProfileController])


}());

