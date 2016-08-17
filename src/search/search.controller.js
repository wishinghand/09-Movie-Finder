(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['movieFactory', 'toastr'];

    /* @ngInject */
    function SearchController(movieFactory, toastr) {
        var vm = this;
        vm.searchTerm = "";
        vm.searchMovies = searchMovies;
        vm.movieResults;

        function searchMovies() {
            return movieFactory.searchMovies(vm.searchTerm).then(
                function(data) {
                    console.log(data);
                    vm.movieResults = data;
                },
                function(error) {
                    toastr.error(error, 'Error');
                }
            );
        }
    }
})();
