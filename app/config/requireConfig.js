

require.config({
    baseUrl: '../',
    paths: {
        boost   : 'app/boost',

        // GOOGLE
        movieGoogler    :   'modules/googleSearch/movieGoogler',

        //  IWN
        iwnServices    :   'modules/iwn/iwnServices',

        //  TMDB
        tmdbMovieServices    :   'modules/tmdb/tmdbMovieServices',
        tmdbSearchServices    :   'modules/tmdb/tmdbSearchServices',
        tmdbWorker    :   'modules/tmdb/tmdbWorker',
        tmdbMngr    :   'modules/tmdb/tmdbMngr',

        //  OMDB
        omdbServices    :   'modules/omdb/omdbServices',
        omdbMngr    :   'modules/omdb/omdbMngr',

        // Node modules
        angular :   'node_modules/angular/angular',
        ngMaterial :   'node_modules/angular-material/angular-material',
        ngAnimate :   'node_modules/angular-animate/angular-animate',
        ngResource :   'node_modules/angular-animate/angular-resource',
        ngAria :   'node_modules/angular-aria/angular-aria',
        angularAMD :   'node_modules/angular-amd/angularAMD',
        ngRoute :   'node_modules/angular-route/angular-route.min',
        lodash :   'node_modules/lodash/lodash.min',
        q :   'node_modules/q/q',
        request :   'node_modules/request/request',
        rp :   'node_modules/request-promise/lib/rp',
        domReady : 'node_modules/requirejs-domready/domReady',


        //  Resources
        movieDetailsJson  :   'resources/movieDetailsJson',
        tokenJson  :   'resources/tokenJson',

        //  homepage
        homepage    :   'app/sections/home/components/homepage',

        //  moviepage
        moviepage    :   'app/sections/movie/components/moviepage',

        // HeaderCtrl
        header    :   'app/sections/header/components/header',

    },

    shim: {
        angular: {
            exports: 'angular'
        },
        ngRoute: ['angular'],
        angularAMD: ['angular'],
        homepage : {
            deps: [
                'angular',
                'ngRoute',
                'header'
            ],
            exports: 'homepage'
        },
        header : {
            deps: [
                'angular',
                'ngRoute',
            ],
            exports: 'header'
        },

        ngMaterial : {
            deps: [
                'angular',
                'ngAria'
            ],
            exports: 'homepage'
        },
        ngAnimate : {
            deps: [
                'angular'
            ],
            exports: 'homepage'
        },
        ngResource : {
            deps: [
                'angular'
            ],
            exports: 'ngResource'
        },
        ngAria : {
            deps: [
                'angular'
            ],
            exports: 'homepage'
        }
    },

    deps : ['boost']

});
