const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const hbs = require("hbs");
require("../src/db/conn");
const userMsg = require("../src/models/usermessage");

const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "../templates/partials");
const views_path = path.join(__dirname, "../templates/views");

//console.log( path.join(__dirname, "../templates/partials"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

//Posting From Data to the DB....
app.post("/userMsg", async (req, res) => {
  try {
    const userMassage = new userMsg(req.body);
    await userMassage.save();
    res.status(201).render("index");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`app listining to port ${port}`);
});
