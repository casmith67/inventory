const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.all("/", bodyParser.urlencoded());

router.get("/user/:id/inventory", (req, res) => {
  if (req.session.loggedIn) {
    res.render("inventory");
  } else {
    res.send("You do not have access to this page.");
  }
});

module.exports = router;
