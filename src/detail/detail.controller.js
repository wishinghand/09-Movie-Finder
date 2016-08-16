(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['movieFactory'];

    /* @ngInject */
    function DetailController(movieFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
