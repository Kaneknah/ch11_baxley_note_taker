const fs = require("fs");
const path = require("path");
const { notesArray } = require("../db/notes.json");
const { v4: uuid } = require("uuid");

//sets the index for each note.
// let index = 0;
// notesArray.forEach((note) => {
// 	note.id = index;
// 	index += 1;
// });
//function for creating a note and writing it to the file with JSON.
const createNote = (note) => {
	const { title, text } = note;
	const noteId = { title, text, id: uuid() };
	notesArray.push(noteId);
	fs.writeFileSync(
		path.join(__dirname, "../db/notes.json"),
		JSON.stringify({ notesArray }, null, 2)
	);
	return note;
};

//Function for editing notes. (UNFINISHED)
// const editNote = (editedNotes, notesArray) => {
// 	const edits = notesArray.findIndex((notes) => note.id === editNote.id);
// 	notesArray.splice(edits, 1);
// 	notesArray.splice(edits, 0, editedNotes);

// 	fs.writeFileSync(
// 		path.join(__dirname, "../db/notes.json"),
// 		JSON.stringify({ notesArray }, null, 2)
// 	);
// };

//Function for deleting a note.(UNFINISHED)
// const deleteNote = (id, notes) => {
// 	const notesArray = notes.filter((el) => {
// 		console.log(el);
// 		if (el.id == id) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	});

// 	//write to file
// 	fs.writeFileSync(
// 		path.join(__dirname, "../db/notes.json"),
// 		JSON.stringify({ notesArray }, null, 2)
// 	);
// 	return notesArray;
// };

module.exports = { createNote };
