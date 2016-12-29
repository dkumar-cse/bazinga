
define(['boost', 'q'], function (app, Q) {

    app.controller('searchpageController',['$scope', '$routeParams', '$resource', function ($scope, $routeParams, $resource) {

        var movieId = $routeParams.movieId;
        var queryString = $routeParams.query;

        var MovieService = $resource('/api/search', {id:movieId, q:queryString});

        var searchResult = MovieService.get({q:queryString}, function(response) {

            $scope.movie_search_snips = response.result;
        });

    }]);
});
