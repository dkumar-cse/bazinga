// angular.module('bazinga').component('moviepage',{
//     templateUrl :  '../moviepage.template.html',
//     controller: ['$http', '$routeParams',
//       function moviepageController($http, $routeParams) {
//         var self = this;
//
//       }
//     ]
// })


define(['boost', 'q'], function (app, Q) {



    app.controller('moviepageController',['$scope', '$routeParams', '$resource', function ($scope, $routeParams, $resource) {

        var movieId = $routeParams.movieId;
        var queryString = $routeParams.q;

        var MovieService = $resource('/api/movie', {id:movieId, q:queryString});
        MovieService.get({id:movieId}, function(response) {

            //  Render Movie Content  -  START

            var result = response.result;

            $scope.overview = result.overview;
            $scope.plot = result.plot;
            $scope.directors = result.directors;
            $scope.writers = result.writers;
            $scope.casts = result.casts;
            $scope.awardInfo = result.awardInfo;
            $scope.duration = result.duration;
            $scope.release_date = result.releaseDate;
            $scope.release_year = result.year;
            $scope.poster_pics_url = result.posterPics;
            $scope.releaseYear = result.year;
            $scope.title = result.title;
            $scope.backdrop_pic = result.backdropPic;

            //  Render Movie Content  -  END


        });

        var MovieCastsService = $resource('/api/movie/casts', {id:movieId});
        MovieCastsService.get({id:movieId}, function(response) {

            //  Render Movie Content  -  START

            var result = response;

            $scope.casts = result.casts;
            $scope.directors = result.crew;


            //  Render Movie Content  -  END


        });

    }]);
});
