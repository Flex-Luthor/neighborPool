angular.module('appCtrl', [])

.controller('loginCtrl',function($scope, $location){
  $scope.sendHome = function(){
    $location.path('/home')
  }
})
// .controller('homeCtrl', function($scope, $window, $http, $location, $cordovaGeolocation, $ionicLoading){
//         //Setting some coordinates to get the map to render but they will change in findLocation function.
        
//   
  
// });


// Ionic Starter App
 
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

.controller('homeCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {
    $scope.map = { center: { latitude: 38, longitude: -122 }, zoom: 15 };
    $ionicPlatform.ready(function() {    
 
        $ionicLoading.show({
            template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
        });
         
        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };
 
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
             
            var myLatlng = new google.maps.LatLng(lat, long);
             
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };          
             
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
             
            $scope.map = map;   
            $ionicLoading.hide();           
             
        }, function(err) {
            $ionicLoading.hide();
            console.log(err);
        });
    })               
});