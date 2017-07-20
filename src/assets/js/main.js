var app= angular.module("app", ["ngRoute"]);

// ROUTING CONFIGUATION
app.config(function($routeProvider){

    $routeProvider.when("/page1", {
        "templateUrl" : "./src/views/page1.html",
        "controller" : "page1"
    });


    $routeProvider.when("/page2", {
        "templateUrl" : "./src/views/page2.html",
        "controller" : "page2"
    });

    $routeProvider.when("/page3", {
        "templateUrl" : "./src/views/page3.html",
        "controller" : "page3"
    });
    


});
