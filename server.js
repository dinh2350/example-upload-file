var mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`=========> http://localhost:${port}`));

mongoose.connect("mongodb://localhost/upload-file", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("=========> connect mongooDB successfull");
});
