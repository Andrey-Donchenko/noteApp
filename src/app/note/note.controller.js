(function() {
    
    'use strict';

    function NoteController($scope, $state, $stateParams, DataNote) {
        var vm = this;

        vm.getNotes = getNotes;
        vm.checkItem = checkItem;
        vm.removeFilter = removeFilter;
        vm.openNote = openNote;
        vm.checkLabel = checkLabel;
        vm.check = [];
        vm.selected = [];
        vm.filter = {};
        vm.query = {
            filter: '',
            label: ''
        };
       
        vm.$onInit = function() {
            getNotes();
        };

        function getNotes() {
            DataNote.getNotes()
                .$loaded()
                .then(function(data) {
                    vm.notes = data.reverse();
                    vm.load = true;
                });
        }
        
        $scope.$on('clickLabel', function(event, args) {
            vm.query.label = args.data;
        });

        $scope.$on('clickNotes', function() {
            vm.query.label = '';
        });

        function checkItem(note, index) {
            if (vm.check[index]) {
                vm.selected.push(note);
            }
            else {
                vm.selected.forEach(function(el, i, arr) {
                    if (el.$id === note.$id) {
                        arr.splice(i, 1);
                    }
                });
            }
        }

        function checkLabel(item) {
            if (!vm.query.label) {
                return true;
            }
            else {
                if (!item.labels) {
                    return false;
                }
                else {
                    return item.labels.some(function(el) {
                        return el === vm.query.label;
                    });
                }
            }
        }

        function removeFilter() {
            vm.filter.show = false;
            vm.query.filter = '';

            if(vm.filter.form.$dirty) {
                vm.filter.form.$setPristine();
            }
        }

        function openNote(noteId) {
            $state.go('triangular.editNote', {noteId: noteId});
        }
    }

    angular
        .module('app.note')
        .controller('NoteController', [
            '$scope',
            '$state',
            '$stateParams',
            'DataNote',
            NoteController
        ]);
})();