const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = express.Router();

const register = require("../models/register");

router.use(bodyParser.urlencoded());

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  register.CheckForDuplicates(req, res);
});

module.exports = router;
