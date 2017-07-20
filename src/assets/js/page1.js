var app = angular.module("app");


app.controller("page1", function($scope, $location){

    // CONCEPT.
    console.log("PAGE1");
    
    $scope.data1 = {"title" : "Hello Page1"};

    $scope.moreData = {"sdate" : new Date()};


    $scope.goToPage2 = function(){


        $location.path("/page2");
    };

});