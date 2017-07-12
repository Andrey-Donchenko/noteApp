(function() {

    'use strict';

	function DataLabel ($firebaseArray, $mdDialog, DataNote) {
	 	
	 	var ref = firebase.database().ref("labels");
	 	var menu;
	 	var factory = {
	 		getLabels: getLabels,
	 		addLabel: addLabel,
	 		editLabel: editLabel,
	 		deleteLabel: deleteLabel,
	 		setMenu: function(data) {
	 			menu = data;
	 		}
	 	};
	 	return factory;

	 	function getLabels() {
	  		return $firebaseArray(ref);
	 	}

	 	function addLabel(label) {
	 		var state = false;
	 		getLabels()
	 			.$loaded()
	  			.then(function(data) {
	  				data.forEach(function(el) {
	  					if (label.name.toLowerCase() === el.name.toLowerCase()) {
	  						state = true;
	  					}
	  				});
	  				if (state) {
			  			showAlert();
			  		}
			  		else {
			  			getLabels().$add(label)
			  				.then(function() {
			  					menu.children.push({
					                name: label.name,
					                type: 'link'
					            });
			  				});		
			  		}	
	  			});
	 	}

	 	function editLabel(label, newName) {
	 		var state = false;
	 		var oldName = label.name;
	 		getLabels()
	 			.$loaded()
	  			.then(function(data) {
	  				data.forEach(function(el) {
	  					if (newName.toLowerCase() === el.name.toLowerCase()) {
	  						state = true;
	  					}	  					
	  				});
			  		if (state) {
						showAlert();
					}
					else {
				  		var record = data.$getRecord(label.$id);
				  		record.name = newName;
				  		data.$save(record);
				  		DataNote.getNotes()
			  			.$loaded()
			  			.then(function(data) {
			  				data.forEach(function(note) {
			  					if (note.labels) {
			  						var record = data.$getRecord(note.$id);
			  						record.labels.forEach(function(el, i, arr) {
			  							if (el === oldName) {
			  								arr[i] = newName;
			  								data.$save(record);
			  							}
			  						});
			  					}
			  				});
			  			});
				 		menu.children.forEach(function(el, i, arr) {
				  			if (el.name === oldName) {
				  				el.name = newName;
				  			}
				  		});
			 		}
			 	});
	 	}

	 	function deleteLabel(label) {
	 		getLabels()
	 			.$loaded()
	  			.then(function(data) {
  					var record = data.$getRecord(label.$id);
	  				data.$remove(record);
	  			});
	  		DataNote.getNotes()
	  			.$loaded()
	  			.then(function(data) {
	  				data.forEach(function(note) {
	  					if (note.labels) {
	  						var record = data.$getRecord(note.$id);
	  						record.labels.forEach(function(el, i, arr) {
	  							if (el === label.name) {
	  								arr.splice(i, 1);
	  								data.$save(record);
	  							}
	  						});
	  					}
	  				});
	  			});
	  		menu.children.forEach(function(el, i, arr) {
	  			if (el.name === label.name) {
	  				arr.splice(i, 1);
	  			}
	  		});
	 	}

	 	function showAlert() {
			var alert = $mdDialog.alert()
				.title('Attention')
				.textContent('label with that name allready exist')
				.ok('Close');
			$mdDialog
				.show(alert)
				.finally(function() {
					alert = undefined;
				});
		}
	}
	   	
	angular
		.module('app.label')
		.factory('DataLabel', [
			'$firebaseArray',
			'$mdDialog',
			'DataNote',
			DataLabel
		]);
})();