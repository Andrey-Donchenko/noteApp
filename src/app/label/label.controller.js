(function() {
    
    'use strict';

    function LabelController(DataLabel) {
        var vm = this;

        vm.getLabels = getLabels;
        vm.selected = [];
        vm.options = {
            limitSelect: true,
            pageSelect: true
          };
        vm.query = {
            limit: 10,
            order: 'name',
            page: 1
        };
        vm.limitOptions = [10, 20];
        vm.filter = {
            options: {
                debounce: 500
            }
        };
        
        vm.$onInit = function() {
            getLabels();
        };
        
        function getLabels() {
            DataLabel.getLabels()
                .$loaded()
                .then(function(data) {
                    vm.labels = data;
                });
        }
    }

    angular
        .module('app.label')
        .controller('LabelController', [
            'DataLabel',
            LabelController
        ]);
})();
