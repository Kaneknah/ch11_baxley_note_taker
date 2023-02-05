//Sets up the constants for requiring outside routes as well as requires express and fs.
const express = require("express");
const { appendFile } = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = process.env.Port || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);

//Sets up the use of the "public folder"
app.use(express.static("public"));
//sets up the use of the Routes

app.use("/", htmlRoutes);

//Allows for the listening for the PORT for the API server.
app.listen(PORT, () => {
	console.log(`API server now on port ${PORT}`);
});

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
