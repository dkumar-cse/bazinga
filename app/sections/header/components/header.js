define(['boost'], function (app) {
    angular.module('header', []).controller('HeaderController', ['$scope', '$routeParams', '$resource', '$location', function( $scope, $routeParams, $resource, $location ) {
        $scope.size = {size:48, padding:10};
        $scope.font = {name: 'icon-home', color: "#777" };
        $scope.search_text = null;

        $scope.searchText = function () {
            var url = "movies/search/" + $scope.search_text;
            $location.path(url);
        };
  }])
  .config(function($mdThemingProvider){
    // Update the theme colors to use themes on font-icons
    $mdThemingProvider.theme('default')
          .primaryPalette("red")
          .accentPalette('green')
          .warnPalette('blue');
  });
});
