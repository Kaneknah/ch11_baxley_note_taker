const path = require("path");
const router = require("express").Router();

//Connects our main page to the HTML source.
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//Connects out Notes page to the HTML source
router.get("/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;
