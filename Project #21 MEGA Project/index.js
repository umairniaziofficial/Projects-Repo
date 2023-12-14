const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/Apps", (req, res) => {
  res.render("Apps.ejs");
});

app.get("/Games", (req, res) => {
  res.render("Games.ejs");
});

app.get("/Others", (req, res) => {
  res.render("Others.ejs");
});

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
