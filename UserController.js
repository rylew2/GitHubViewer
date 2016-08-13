(function() {
  //currently a global var
  var UserController = function($scope, github, $routeParams) {

            //Successful return of Github user
        var onUserComplete = function(data) { 
          $scope.user = data;
          github.getRepos($scope.user).then(onRepos, onError); 
        }; 
    
        var onRepos = function(data) {
          $scope.repos = data;
        };
 
        var onError = function(reason) {
          $scope.error = "Could not fetch the data from GitHub";
        };


        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($routeParams.username).then(onUserComplete, onError);

  };

  var app = angular.module("GitHubViewer"); //just a reference to GitHubViewer not an instantiation/creation

  app.controller("UserController", UserController);
 
})();  