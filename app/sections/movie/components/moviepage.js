// angular.module('bazinga').component('moviepage',{
//     templateUrl :  '../moviepage.template.html',
//     controller: ['$http', '$routeParams',
//       function moviepageController($http, $routeParams) {
//         var self = this;
//
//       }
//     ]
// })


define(['boost', 'q'], function (app, Q, mdc) {

    // mdc.autoInit();

    app.controller('moviepageController',['$scope', '$routeParams', '$resource', function ($scope, $routeParams, $resource) {

        var movieId = $routeParams.movieId;
        var queryString = $routeParams.q;

        var MovieService = $resource('/api/movie', {id:movieId, q:queryString});
        MovieService.get({id:movieId}, function(response) {

            var result = response.result;

            $scope.overview = result.overview;
            $scope.plot = result.plot;
            $scope.awardInfo = result.awardInfo;
            $scope.duration = result.duration;
            $scope.release_date = result.releaseDate;
            $scope.release_year = result.year;
            $scope.poster_pics_url = result.posterPics;
            $scope.releaseYear = result.year;
            $scope.title = result.title;
            $scope.backdrop_pic = result.backdropPic;
            console.log($scope.backdrop_pic);

        });

        var MovieCastsService = $resource('/api/movie/casts', {id:movieId});
        MovieCastsService.get({id:movieId}, function(response) {

            var result = response;
            $scope.directors = result.crew.directors;
            $scope.writers = result.crew.writers;
            $scope.casts = result.casts;

        });

        var MovieRatingService = $resource('/api/movie/ratrev', {id:movieId});
        MovieRatingService.get({id:movieId}, function(response) {

            $scope.toiRating = response.data.toi;
            $scope.imdbRating = response.data.imdb;
            $scope.bhRating = response.data.bh;
            $scope.mmRating = response.data.mm;

        });

    }]);
});
