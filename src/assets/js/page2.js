var app = angular.module("app");


app.controller("page2", function($scope, $location){

    // CONCEPT.
    console.log("PAGE2");

    $scope.data1 = {"title" : "Hello Page2"};

    $scope.dataList = [
        {"title":"page1", "color": "red"}, 
        {"title":"page2", "color" : "green"}
    ];
    
    
    $scope.goToPage1 = function(){

        console.log("GO TO PAGE1");

        $location.path("/page1");
    };

});