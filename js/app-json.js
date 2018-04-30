/**
 * Created by Dian on 30/04/2018.
 */
var testApp = angular.module('testApp', []);

testApp.controller('testController' , function ($scope, $http) {
    $scope.home = "This is the homepage";

    $scope.getRequest = function () {
        console.log("I've been pressed!");
        $http.get("http://192.168.10.146:3500/gallery/K9GEjARB")
            .then(function successCallback(response){
                $scope.response = response;
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };

});