const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");

const router = express.Router();

const login = require("../models/login");

router.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: false
    }
  })
);

router.use(bodyParser.urlencoded());

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../views/login.html"));
});

router.post("/login", (req, res) => {
  login.authenticateUser(req, res);
});

module.exports = router;
