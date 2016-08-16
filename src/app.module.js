(function() {
    'use strict';
    angular.module('app', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/search');
        $stateProvider
            .state('search', {
                url: "/search",
                templateUrl: "src/search/search.html",
                controller: "SearchController as search"
            })
            .state('detail',{
                url: "/detail",
                templateUrl: "src/detail/detail.html",
                controller: "DetailController as detail"
            })
    })
    .value('baseURL', 'http://www.omdbapi.com/?')
})();