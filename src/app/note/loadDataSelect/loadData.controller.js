(function() {
    
    'use strict';

    function LoadDataController($rootScope, $state, DataLabel) {
        var vm = this;

        vm.$onInit = function() {
            vm.labels = [];
            getLabels();
        };

        function getLabels() {
            DataLabel.getLabels()
                .$loaded()
                .then(function(data) {
                    data.forEach(function(el) {
                        vm.labels.push(el);
                    });
                });
        }
    }

    angular
        .module('app.note')
        .controller('LoadDataController', [
            '$rootScope',
            '$state',
            'DataLabel',
            LoadDataController
        ]);
})();