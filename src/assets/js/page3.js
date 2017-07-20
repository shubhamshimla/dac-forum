var app = angular.module("app");


app.controller("page3", function($scope, $location){

    $scope.user = {};
    $scope.userList = [
        {"username" : "kharghar@cdac.in"}
    ];

    $scope.signin = function(){

        console.log($scope.user);
    }


    $scope.register = function(){
        var user = $scope.user;
        $scope.userList.push(user);

        $scope.user = {};
    }



});