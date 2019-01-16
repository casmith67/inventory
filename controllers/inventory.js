const express = require("express");
const login = require("../models/login");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded());

router.use("/", bodyParser.urlencoded());

router.get("/inventory", (req, res) => {
  if (req.session.loggedIn) {
    res.send("Welcome back!");
  } else {
    res.send("You do not have access to this page.");
  }
});

module.exports = router;
