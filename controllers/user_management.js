const express = require("express");
const router = express.Router();

const getUserArray = require("../models/user_management");

router.get(`/user/:id/adminPanel/userManagement`, (req, res) => {
  res.render("userManagement", {
    access: req.session.access,
    users: getUserArray.getUsers(),
  });
});

module.exports = router;
