const express = require("express");
const bodyParser = require("body-parser");
const { check } = require("express-validator/check");
const utils = require("./scripts/utilities");
const router = require("./scripts/login");
const router2 = require("./scripts/register");

const app = express();

// Use routes
app.use("/", router);
app.use("/", router2);

// Home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000);
