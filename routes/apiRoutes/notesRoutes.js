const router = require("express").Router();
let { notesArray } = require("../../db/notes");

// GET Route for retrieving all the note
router.get("/notes", (req, res) => {
	let results = notesArray;
	res.json(results);
});

//POST Route for submitting Notes ADD
router.post("/notes", (req, res) => {
	console.log("Note Added");
	res.json(notes);
});
//router.put

//router.delete
router.delete("/notes/:id", function (req, res) {
	console.log("Note Deleted");
	const note = findByIdAndRemove(req.params.id);
});
// .catch((err) => {
//     console.log(err.message);
// });

module.exports = router;
