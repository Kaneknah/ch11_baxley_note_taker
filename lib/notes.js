const fs = require("fs");
const path = require("path");

//sets the index for each note.
let index = 0;
notesArray.forEach((note) => {
	note.id = index;
	index += 1;
});
//function for creating a note and writing it to the file with JSON.
const createNote = (note, notesArray) => {
	notesArray.push(note);
	fs.writeFilesSync(
		path.join(__dirname, "../db/notes.json"),
		JSON.stringify({ notesArray }, null, 2)
	);
	return note;
};

//Function for deleting a note.
const deleteNote = (id, notes) => {
	const notesArray = notes.filter((el) => {
		if (el.id == id) {
			return false;
		} else {
			return true;
		}
	});

	//write to file
	fs.writeFilesSync(
		path.join(_dirname, "../db/notes.json"),
		JSON.stringify({ notesArray }, null, 2)
	);
	return notesArray;
};

module.exports = createNote;
module.exports = deleteNote;
