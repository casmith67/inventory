const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = express.Router();

const login = require("../scripts/login");

router.use(bodyParser.urlencoded());

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../views/login.html"));
});

router.post("/login", (req, res) => {
  login.authenticateUser(req, res);
});

module.exports = router;
