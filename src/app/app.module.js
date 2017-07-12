(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'triangular',
            'firebase',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'chart.js', 'linkify', 'textAngular', 'hljs', 'md.data.table', 'ngFileUpload', 'nvd3',
            'app.note',
            'app.label'
        ])

        .constant('API_CONFIG', {
            'url':  'http://triangular-api.oxygenna.com/'
        });
        
})();
