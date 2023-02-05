const router = require("express").Router();

// GET Route for retrieving all the note
router.get("/notes", (req, res) => {
	res.json(notes);
});

//POST Route for submitting Notes
router.post("/notes", (req, res) => {
	res.json(notes);
});
//Function that
router.delete("/notes/:id", function (req, res) {
	try {
		console.log("Note Deleted");
		const note = findByIdAndRemove(req.params.id);
	} catch {
		(err) => {
			console.log(err.message);
		};
	}
});

module.exports = router;
