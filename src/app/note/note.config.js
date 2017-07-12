(function() {
    
    'use strict';
  
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.notes', {
            url: '/notes',
            templateUrl: 'app/note/note.tmpl.html',
            controller: 'NoteController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            },
        })
        .state('triangular.editNote', {
            url: '/editNote/:noteId',
            templateUrl: 'app/note/editNote/editNote.tmpl.html',
            controller: 'EditNoteController',
            controllerAs: 'vm',
        })
        .state('triangular.createNote', {
            url: '/createNote',
            templateUrl: 'app/note/createNote/createNote.tmpl.html',
            controller: 'CreateNoteController',
            controllerAs: 'vm',
        });
       
        triMenuProvider.addMenu({
            name: 'Notes',
            icon: 'zmdi zmdi-calendar-note',
            type: 'link',
            priority: 1,
            state: 'triangular.notes'
        });
    }

    angular
        .module('app.note')
        .config(moduleConfig);
})();
