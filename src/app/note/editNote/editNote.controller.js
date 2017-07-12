(function() {
    
    'use strict';

    function EditNoteController($state, $stateParams, DataNote, ColorData) {
        var vm = this;

        vm.editNote = editNote;
        vm.colors = ColorData.getData();

        vm.$onInit = function() {
            DataNote.getNotes()
                .$loaded()
                .then(function(data) {
                    vm.note = data.$getRecord($stateParams.noteId);
                    if (!vm.note) {
                        $state.go('404');
                    }
                });
        };

        function editNote() {
            DataNote.editNote(vm.note);
            $state.go('triangular.notes');
        }
    }

    angular
        .module('app.note')
        .controller('EditNoteController', [
            '$state',
            '$stateParams',
            'DataNote',
            'ColorData',
            EditNoteController
        ]);
})();