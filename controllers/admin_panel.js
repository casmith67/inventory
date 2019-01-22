const express = require("express");

const pullInfo = require("../models/user_management");

const router = express.Router();

router.get("/admin", (req, res) => {
  var users = pullInfo.getUsers();

  for (var i = 0; i < users.length; i++) {
    if (users[i] != null) console.log(`Username: ${users[i][0]}`);
  }

  if (req.session.role == "owner") {
    req.session.access = true;
    res.render("admin", {
      access: req.session.access,
      id: req.session.userId,
      users: users
    });
  } else {
    res.render("admin", {
      access: false
    });
  }
});

module.exports = router;
