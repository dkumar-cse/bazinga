define(['boost'], function (app) {
    angular.module('header', []).controller('HeaderController', function( $scope ) {
        $scope.size = {size:48, padding:10};
        $scope.font = {name: 'icon-home', color: "#777" };
  })
  .config(function($mdThemingProvider){
    // Update the theme colors to use themes on font-icons
    $mdThemingProvider.theme('default')
          .primaryPalette("red")
          .accentPalette('green')
          .warnPalette('blue');
  });
});
