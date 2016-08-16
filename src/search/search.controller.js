(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['movieFactory'];

    /* @ngInject */
    function SearchController(movieFactory) {
        var vm = this;
        vm.searchTerm = "";
        vm.searchMovies = searchMovies;

        activate();

        function activate() {
        }

        function searchMovies() {
            return movieFactory.searchMovies(vm.searchTerm).then(
                function(data) {
                    console.log(data);
                },
                function(error) {

                }
            );
        }
    }
})();
