const express = require("express");

const pullInfo = require("../models/user_management");

const router = express.Router();

router.get("/admin", (req, res) => {
  if (req.session.role == "owner") {
    req.session.access = true;
    res.render("admin", {
      access: req.session.access,
      id: req.session.userId,
      users: pullInfo.getUsers()
    });
  } else {
    res.render("admin", {
      access: false
    });
  }
});

module.exports = router;
