const router = require("express").Router();
let { notesArray } = require("../../db/notes.json");
const { createNote, deleteNote, editNote } = require("../../lib/notes");
const uuid = require("uuid");

// GET Route for retrieving all the note
router.get("/notes", (req, res) => {
	let results = notesArray;
	res.json(results);
	console.log(results);
});
//NEED to add an ID for each created note
//POST Route for submitting Notes ADD
router.post("/notes", (req, res) => {
	console.log("Note Added");
	const notes = createNote(req.body);
	res.json(notes);
	console.log(notes);
});
//Editing created Notes
router.put("./notes/:id", (req, res) => {
	editNote(req.body, notesArray);
	res.json(req.body);
});

//Deleting Created Notes
router.delete("/notes/:id", function (req, res) {
	console.log("Note Deleted");
	const note = deleteNote(req.params.id, note);
	res.json(note);
	console.log(note);
});
// .catch((err) => {
//     console.log(err.message);
// });

module.exports = router;
