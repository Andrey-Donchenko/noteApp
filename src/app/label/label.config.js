(function() {
    
    'use strict';
    
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.labels', {
            url: '/labels',
            templateUrl: 'app/label/label.tmpl.html',
            controller: 'LabelController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            },
        });

        triMenuProvider.addMenu({           
            name: 'Labels :',
            icon: 'zmdi zmdi-label',
            type: 'dropdown',
            priority: 2,
            state: 'triangular.labels'
        });
    }

    angular
        .module('app.label')
        .config(moduleConfig);
})();
