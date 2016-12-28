/*
*   Starting point of application
*
*   @athor  : DivyaKumar
*   @date   : 15 Dec 2016
*
*/

define(['angularAMD', 'ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngResource', 'header'], function(angularAMD) {
    console.log("start loading app....");
    var app = angular.module("webapp", ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngResource', 'header']);
    app.config(['$locationProvider', '$routeProvider',function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
            when('/movies', angularAMD.route({
                templateUrl: 'app/sections/home/templates/homepage.template.html',
                controller: 'homepageController',
                controllerUrl: 'homepage'
            })).
            when('/movies/:movieId', angularAMD.route({
                templateUrl: 'app/sections/movie/templates/moviepage.template.html',
                controller: 'moviepageController',
                controllerUrl: 'moviepage'
            })).
            when('/movies/search/:query', angularAMD.route({
                templateUrl: 'app/sections/movie/templates/searchpage.template.html',
                controller: 'searchpageController',
                controllerUrl: 'searchpage'
            })).
            otherwise('/movies');
    }]);
    console.log("start bootstraping....");
    return angularAMD.bootstrap(app);
});
