(function() {
    
    'use strict';

    function CreateNoteController($state, DataNote, ColorData) {
        var vm = this;
        
        vm.createNote = createNote;
        vm.colors = ColorData.getData();

        function createNote(isValid) {
            if (isValid) {
                addNoteData();
            }
        } 

        function addNoteData() {
            DataNote.addNote(vm.note);
            $state.go('triangular.notes');
        }
    }

    angular
        .module('app.note')
        .controller('CreateNoteController', [
            '$state',
            'DataNote',
            'ColorData',
            CreateNoteController
        ]);
})();