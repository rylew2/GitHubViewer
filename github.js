(function(){ 
  
  //Revealing module pattern
  //Get user and repos for user
  var github = function($http){
    var getUser = function(username){
      return $http.get("https://api.github.com/users/" + username)
            .then( function(response){
                return response.data;
             });
    }
    var getRepos = function(user){
      return $http.get(user.repos_url)
                  .then(function(response){
                    return response.data;
                  });
    };

    var getRepoDetails = function (username, reponame) {
        
        var repo;

        var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

        //Chained promises
        //each return is the input to the next success function
        return $http.get(repoUrl)
                    .then(function (response) {
                        repo = response.data;
                        return $http.get(repoUrl + "/contributors");
                    })
                    .then(function (response) {
                        repo.contributors = response.data;
                        return repo;
                    });

    };

    return{
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };
    
  }
  

  
  var module = angular.module("GitHubViewer"); //no second parameter because we're not creating a module, just trying to create a module
  module.factory("github", github); //register the service with angular
                // (name of service , name of function that returns function api object ) 
  
})();
