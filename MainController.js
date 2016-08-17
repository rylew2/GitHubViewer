(function() {

  //currently a global var
  var MainController = function(
        $scope, $interval, $location) {


      var onError = function (reason) {
         
          $scope.error = "Could not fetch the data from GitHub";
        };

        $scope.search = function(username) {
         // $log.info("Searching for " + username);
          $location.path("/user/" + username); 
        };  

      //  $scope.username = "angular";
        $scope.message = "Enter....";

  };

  var app = angular.module("GitHubViewer"); //just a reference to GitHubViewer not an instantiation/creation

  app.controller("MainController", MainController);
 
})(); 