const router = require("express").Router();

// GET Route for retrieving all the note
router.get("/notes", (req, res) => {
	res.json(notes);
});

//POST Route for submitting Notes
router.post("/notes", (req, res) => {
	res.json(notes);
});
//router.delete

module.export = router;
