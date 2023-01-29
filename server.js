const express = require("express");
const { appendFile } = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = process.env.Port || 3001;



// app.use

// app.listen