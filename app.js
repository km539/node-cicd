const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("/name", (req, res) => {
  res.status(200).send("Hello World");
});

module.exports = app;
