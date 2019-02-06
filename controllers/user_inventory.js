const express = require("express");
const bodyParser = require("body-parser");
const inventory = require("../models/inventory");

const router = express.Router();

console.log(inventory.grabSupplies());

router.all("/", bodyParser.urlencoded());

router.get("/user/:id/inventory", (req, res) => {
  if (req.session.loggedIn) {
    res.render("inventory", {});
  } else {
    res.send("You do not have access to this page.");
  }
});

module.exports = router;
