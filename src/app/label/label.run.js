(function() {
    
    'use strict';

    function runFunction(triMenu, DataLabel) {

        var labelMenu = triMenu.menu[1];
        labelMenu.children = [];
        
        DataLabel.getLabels()
            .$loaded()
            .then(function(data) {
                data.forEach(function(el) {
                    labelMenu.children.push({
                        name: el.name,
                        type: 'link',
                    });
                });
            });

        DataLabel.setMenu(labelMenu);
    }
    
    angular
        .module('app.label')
        .run(runFunction);
})();
