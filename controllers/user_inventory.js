const express = require("express");
const login = require("../models/login");
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();

router.all("/", bodyParser.urlencoded());

router.get("/inventory", (req, res) => {
  if (req.session.loggedIn) {
    res.render("inventory");
  } else {
    res.send("You do not have access to this page.");
  }
});

module.exports = router;
