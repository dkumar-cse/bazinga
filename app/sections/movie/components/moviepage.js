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
        var Movie = MovieService.get({id:movieId}, function(response) {

            //  Render Movie Content  -  START

            $scope.overview = response.overview;
            $scope.plot = response.plot;
            $scope.directors = response.directors;
            $scope.writers = response.writers;
            $scope.casts = response.casts;
            $scope.awardInfo = response.awardInfo;
            $scope.duration = response.duration;
            $scope.release_date = response.releaseDate;
            $scope.release_year = response.year;
            $scope.poster_pics_url = response.posterPics;
            $scope.releaseYear = response.year;
            $scope.title = response.title;
            $scope.backdrop_pic = response.backdropPic;

            //  Render Movie Content  -  END


        });

    }]);
});
