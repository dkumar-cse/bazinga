
define(['boost', 'q'], function (app, Q) {

    app.controller('searchpageController',['$scope', '$routeParams', '$resource', '$location', function ($scope, $routeParams, $resource, $location) {
        $scope.no_result = false;
        var movieId = $routeParams.movieId;
        var queryString = $routeParams.query;

        var MovieService = $resource('/api/search', {id:movieId, q:queryString});

        var searchResult = MovieService.get({q:queryString}, function(response) {
            if(response.result.length > 0){
                $scope.result_empty = false;
                $scope.movie_search_snips = response.result;
            }else{
                $scope.result_empty = true;
            }

        });



    }]);
});
