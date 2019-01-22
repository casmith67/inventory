const express = require("express");

const router = express.Router();

router.get("/admin", (req, res) => {
  if (req.session.role == "owner") {
    res.render("admin", {
      access: true,
      id: req.session.userId
    });
  } else {
    res.render("admin", {
      access: false
    });
  }
});

module.exports = router;
