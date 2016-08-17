(function() {
    'use strict';

    angular
        .module('app')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http', '$q', 'baseURL'];

    /* @ngInject */
    function movieFactory($http, $q, baseURL) {
        var service = {
            searchMovies: searchMovies
        };
        return service;

        ////////////////

        function searchMovies(movieTitle) {
            var query = 's=' + movieTitle;
            var defer = $q.defer();

            $http({
                method: "GET",
                url: baseURL + query
            }).then(function(response){
                if(response.data.Response === "False"){
                    defer.reject(response.data.Error);
                }
                defer.resolve(response.data.Search);
            }).then(function(response){
                defer.reject("Server not found");
            });

            return defer.promise;
        }
    }
})();
