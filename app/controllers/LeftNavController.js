(function() {

  //currently a global var
  var LeftNavController = function($scope, $location) {
      
      if (!$scope.$$phase) {
          $scope.$apply()
      }

      switch($location.path()) {
          case '/main':
              $scope.message = 'Please enter a GitHubUsername';
              break;
          case $location.path().includes('/user'):
              $scope.message = 'asfdafsd';
              break;
          
          default:
              $scope.message = 'GitHubViewer';
      }


  };

    //just a reference to GitHubViewer not an instantiation/creation
  var app = angular.module("GitHubViewer"); 

  app.controller("LeftNavController", LeftNavController);



 
})();



