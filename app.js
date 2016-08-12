(function() {
  var app = angular.module("GitHubViewer", ["ngRoute"]); //[] for dependencies

  app.config(function($routeProvider) {
     $routeProvider
          .when("/main", { 
                templateUrl: "main.html",
                controller: "MainController"          
          })
           .when("/user/:username", { // : denotes a parameter
                templateUrl: "user.html",
                controller: "UserController"
           })
            .when("/repo/:username/:reponame", { // : denotes a parameter
                templateUrl: "repo.html",
                controller: "RepoController"
            })
          .otherwise({redirectTo: "/main"});
       
    
  });

})();