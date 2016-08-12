(function(){ 
  
  //Revealing module pattern
  //Get user and repos for user
  var github = function($http){
    var getUser = function(username){
      return $http.get("https://api.github.com/users/" + username + 
                "?client_id=61d75e8cec406e0ad085&client_secr" + 
                "et=1380711ff6db898be88dfa75e734a660173e1df2")
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