const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const router = express.Router();

const login = require("../models/login");

router.use(cookieParser());

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

router.use("/", bodyParser.urlencoded());

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  login.authenticateUser(req, res);
});

module.exports = router;
