angular.module('appCtrl', [])

.controller('loginCtrl',function($scope, $location){
  $scope.sendHome = function(){
    $location.path('/home')
  }
})
.controller('homeCtrl', function($scope, $window, $http, $location, $cordovaGeolocation, $ionicLoading){
        //Setting some coordinates to get the map to render but they will change in findLocation function.
        $scope.map = { center: { latitude: 38, longitude: -122 }, zoom: 15 };
        
});


