//Sets up the constants for requiring outside routes as well as requires express and fs.
const express = require("express");
const { appendFile } = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = process.env.Port || 3001;

// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up the use of the "public folder"
app.use(express.static("public"));
//sets up the use of the Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Allows for the listening for the PORT for the API server.
app.listen(PORT, () => {
	console.log(`API server now on port ${PORT}!`);
});

// app.use

// app.listen
