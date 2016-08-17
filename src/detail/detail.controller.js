(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['movieFactory', '$stateParams'];

    /* @ngInject */
    function DetailController(movieFactory, $stateParams) {
        var vm = this;
        vm.movieDetails = {};

        activate();

        function activate() {
            var movieId = $stateParams.movieId;
            movieFactory.getMovieDetails(movieId).then(
                function(data) {
                    vm.movieDetails = data;
                },
                function(error) {

                }
            );

        }
    }
})();
