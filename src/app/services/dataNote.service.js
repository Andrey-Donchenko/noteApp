(function() {

    'use strict';

	function DataNote ($firebaseArray) {
	 	
	 	var ref = firebase.database().ref("notes");
	 	var factory = {
	 		addNote: addNote,
	 		getNotes: getNotes,
	 		editNote: editNote,
	 		deleteNote: deleteNote
	 	};
	 	return factory;

	 	function addNote(note) {
	 		getNotes().$add(note);
	 	}

	 	function getNotes() {
	  		return $firebaseArray(ref);
	 	}

	 	function editNote(note) {
	 		getNotes()
	 			.$loaded()
	  			.then(function(data) {
	  				var record = data.$getRecord(note.$id);
	  				Object.assign(record, note);
	  				data.$save(record);
	 			});
	 	}

	 	function deleteNote(selected, checked, note) {
	 		var arr = [];
	 		getNotes()
	 			.$loaded()
	  			.then(function(data) {
	  				if (note) {
	  					arr.push(note);
	  				}
	  				else {
	  					Object.assign(arr, selected);
	  				}
	  				arr.forEach(function(el) {
	  					var record = data.$getRecord(el.$id);
	                    data.$remove(record);
	  				});
	  				selected.length = 0;
	  				checked.length = 0;
	  			});
	 	}
	}
	   	
	angular
		.module('app.note')
		.factory('DataNote', [
			'$firebaseArray',
			DataNote
		]);
})();