(function() {
  var app = angular.module("GitHubViewer", ["ngRoute"]); //[] for dependencies

  app.config(function($routeProvider) {
     $routeProvider
          .when("/main", { 
                templateUrl: "main.html",
                controller: "MainController",
                message: 'Viewing main'
          })
           .when("/user/:username", { // : denotes a parameter
                templateUrl: "user.html",
                controller: "UserController",
                message: 'Viewing user'
           })
            .when("/repo/:username/:reponame", { // : denotes a parameter
                templateUrl: "repo.html",
                controller: "RepoController",
                message: 'Viewing repo'
            })
          .otherwise({redirectTo: "/main"});
       
    
  });

    


})();