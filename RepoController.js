(function () {

    //currently a global var
    var RepoController = function ($scope, github, $routeParams) {

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

         

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
        .then(onRepo, onError);

    };

    var app = angular.module("GitHubViewer"); //just a reference to GitHubViewer not an instantiation/creation

    app.controller("RepoController", RepoController);

})();