// angular.module('bazinga').component('moviepage',{
//     templateUrl :  '../moviepage.template.html',
//     controller: ['$http', '$routeParams',
//       function moviepageController($http, $routeParams) {
//         var self = this;
//
//       }
//     ]
// })


define(['boost'], function (app) {
    app.controller('moviepageController', function ($scope) {
        //$scope.message = "Message from HomeCtrl";
        $scope.directors = [
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
        ];

        $scope.writers = [
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
        ];
        $scope.casts = [
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
            {
                who : 'Bob Kane (characters)',
                note : 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                face : 'http://iainglen.com/wp-content/uploads/2015/01/TheEveningStandardInterview.jpg'
            },
        ];
    });
});
