(function() {
	
    'use strict';

    function ModalController($mdDialog, DataNote, DataLabel) {
    	var vm = this;

    	vm.deleteNote = deleteNote;
    	vm.createLabel = createLabel;
    	vm.editLabel = editLabel;
    	vm.deleteLabel = deleteLabel;
    	
    	var confirm = $mdDialog.confirm()
		    .title('Are you sure?')
		    .ok('delete')
		    .cancel('cancel');
    	
		function deleteNote(selected, checked, note) {
            $mdDialog.show(confirm).then(function() {
		      	DataNote.deleteNote(selected, checked, note);
			}, function() {
		      $mdDialog.cancel();
		    });
        }

    	function createLabel() {
    		var prompt = $mdDialog.prompt()
    			.title("New label")
		      	.placeholder("label's name")
		      	.initialValue("")
		      	.ok('apply')
		      	.cancel('cancel');
		    $mdDialog.show(prompt).then(function(result) {
		    	var data = {name: result};
	    		DataLabel.addLabel(data);
    		}, function() {
      			$mdDialog.cancel();
    		});
    	}

    	function editLabel(label) {
    		var prompt = $mdDialog.prompt()
    			.title('Edit label')
		      	.placeholder("label's name")
		      	.initialValue(label.name)
		      	.ok('apply')
		      	.cancel('cancel');
		    $mdDialog.show(prompt).then(function(result) {
		    	DataLabel.editLabel(label, result);
    		}, function() {
      			$mdDialog.cancel();
    		});
    	}
		
		function deleteLabel(item) {
		    $mdDialog.show(confirm).then(function() {
		      	DataLabel.deleteLabel(item);
		    }, function() {
		      $mdDialog.cancel();
		    });
		}
    }

    angular
	    .module('app.note')
	    .controller('ModalController', [
	    	'$mdDialog',
	    	'DataNote',
	    	'DataLabel',
	    	ModalController
	    ]);
})();