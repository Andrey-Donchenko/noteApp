(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config(triLayoutProvider) {
        // set app templates (all in app/layouts folder so you can tailor them to your needs)

        // loader screen HTML & controller
        triLayoutProvider.setDefaultOption('loaderTemplateUrl', 'app/layouts/loader/loader.tmpl.html');
        triLayoutProvider.setDefaultOption('loaderController', 'LoaderController');

        // left sidemenu HTML and controller
        triLayoutProvider.setDefaultOption('sidebarLeftTemplateUrl', 'app/layouts/leftsidenav/leftsidenav.tmpl.html');
        triLayoutProvider.setDefaultOption('sidebarLeftController', 'LeftSidenavController');

       
        // top toolbar HTML and controller
        triLayoutProvider.setDefaultOption('toolbarTemplateUrl', 'app/layouts/toolbar/toolbar.tmpl.html');
        triLayoutProvider.setDefaultOption('toolbarController', 'ToolbarController');

       
    }
})();
