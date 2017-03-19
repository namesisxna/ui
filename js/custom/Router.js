(function(){
 var app=angular.module('HomePageView', ['ngRoute' ,'ui.bootstrap'])


app.config(function($routeProvider) {
    $routeProvider
//    .when("/Home" ,{
//  	 templateUrl: "Index.html",  
//        controller: "HomePageController" 
//    })
    .when("/Profile", {  
        templateUrl: "Profile.html",  
        controller: "ProfileController"  
    })
    .when("/Users", {  
        templateUrl: "Users.html",  
        controller: "UserController"  
    })
    .when("/Subscription", {  
        templateUrl: "Subscription.html",  
        controller: "SubscriptionController"  
    })
     .when("/Service", {  
        templateUrl: "Service.html",  
        controller: "ServiceController"  
    })
    .when("/ViewService", {  
        templateUrl: "ViewService.html",  
        controller: "ViewServiceController"  
    })
     .when("/ManageService", {  
        templateUrl: "ManageService.html",  
        controller: "ManageServiceController"  
    })
     .when("/Flow", {  
        templateUrl: "Flow.html",  
        controller: "FlowController"  
    })
      .when("/Destination", {  
        templateUrl: "Destination.html",  
        controller: "DestinationController"  
    })
     .when("/FlightInfoService", {  
        templateUrl: "FlightInfoService.html",  
        controller: "FlightInfoServiceController"  
    })
    .when("/AdministrationService", {  
        templateUrl: "AdministrationService.html",  
        controller: "AdministrationServiceController"  
    })
        .when("/TravelInfoService", {  
        templateUrl: "TravelInfoService.html",  
        controller: "TravelInfoServiceController"  
    })
    .when("/AirlineInfoService", {  
        templateUrl: "AirlineInfoService.html",  
        controller: "AirlineInfoServiceController"  
    })
    .when("/WeatherInfoService", {  
        templateUrl: "WeatherInfoService.html",  
        controller: "WeatherInfoServiceController"  
    })
    .when("/TransportInfoService", {  
        templateUrl: "TransportInfoService.html",  
        controller: "TransportInfoServiceController"  
    })
    .when("/FlightConnectionService", {  
        templateUrl: "FlightConnectionService.html",  
        controller: "FlightConnectionServiceController"  
    })
    .when("/MessageBroadcastService", {  
        templateUrl: "MessageBroadcastService.html",  
        controller: "MessageBroadcastServiceController"  
    })
    .when("/AirportInfoService", {  
        templateUrl: "AirportInfoService.html",  
        controller: "AirportInfoServiceController"  
    })
    .when("/Errors", {  
        templateUrl: "Errors.html",  
        controller: "ErrorController"  
    })
     .when("/AboutUs", {  
        templateUrl: "AboutUs.html",  
        controller: "AboutUsController"  
    })
    .otherwise({redirectTo: "/"})
})

app.config(['$locationProvider', function($locationProvider){$locationProvider.hashPrefix('');}]); 
 
 app.directive('customPopover', function () {
	    return {
	        restrict: 'A',
	        template: '<span>{{label}}</span>',
	        link: function (scope, el, attrs) {
	            scope.label = attrs.popoverLabel;
	            $(el).popover({
	                trigger: 'outsideClick',
	                html: true,
	                content: attrs.popoverHtml,
	                placement: attrs.popoverPlacement
	            });
	        }
	    
	    };
	});
 
}());


