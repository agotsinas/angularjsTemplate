app.controller('indexController',['$scope',function($scope){
    $scope.test = "Hello World from indexController";
}])

app.controller('mainPageController',['$scope',function($scope){
    $scope.test = "Hello World from mainPageController";
}])

app.controller('page1Controller',['$scope',function($scope){
    $scope.test = "Hello World from page1Controller";
}])

app.controller('page2Controller',['$scope',function($scope){
    $scope.test = "Hello World from page2Controller";
}])

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html",
        controller: "mainPageController"        
    })
    .when("/page1", {
        templateUrl : "templates/page1.html",
        controller : "page1Controller"
    })
    .when("/page2", {
        templateUrl : "templates/page2.html",
        controller : "page2Controller"
    })
})