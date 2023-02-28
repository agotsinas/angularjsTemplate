app.controller('indexController',['$scope',function($scope){
    $scope.test = "Hello World from indexController";

    $scope.actionList = [];

    $scope.converterList = [{'Name':'Velocity','ref':"#!velocity"},
                            {'Name':'Distance','ref':"#!distance"},
                            {'Name':'Temperature','ref':"#!temperature"}];

    $scope.calculationList = [{'Name':'Ohm','ref':"#!ohmslaw"},
                              {'Name':'Triangle Area','ref':"#!trianglearea"},
                              {'Name':'Density','ref':"#!density"}];


    $scope.onMenuClicked = function(menuClicked){
        switch(menuClicked){
            case 'main':
                $scope.actionList = null;
                break;
            case 'converters':
                $scope.actionList = $scope.converterList;
                break;
            case 'calculations':
                $scope.actionList = $scope.calculationList;
                break;            
        }
    }
}])

app.controller('mainPageController',['$scope',function($scope){
    $scope.test = "Hello World from mainPageController";
}])

app.controller('convertersController',['$scope',function($scope){
    $scope.test = "Hello World from convertersController";
}])

app.controller('calculationsController',['$scope',function($scope){
    $scope.test = "Hello World from calculationsController";
}])

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html",
        controller: "mainPageController"        
    })
    .when("/converters", {
        templateUrl : "templates/converters.html",
        controller : "convertersController"
    })
    .when("/calculations", {
        templateUrl : "templates/calculations.html",
        controller : "calculationsController"
    })
    .when("/velocity", {
        templateUrl : "templates/velocity.html",
        controller : "converterController"
    })
    .when("/distance", {
        templateUrl : "templates/distance.html",
        controller : "converterController"
    })
    .when("/ohmslaw", {
        templateUrl : "templates/ohmslaw.html",
        controller : "calculationsController"
    })
    .when("/trianglearea", {
        templateUrl : "templates/trianglearea.html",
        controller : "calculationsController"
    })
    .when("/temperature", {
        templateUrl : "templates/temperature.html",
        controller : "converterController"
    })
    .when("/density", {
        templateUrl : "templates/density.html",
        controller : "calculationsController"
})})