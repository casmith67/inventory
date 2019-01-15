const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const conn = require("./utilities");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.use(bodyParser.urlencoded());

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../views/login.html"));
});

router.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let sql = `SELECT password FROM users WHERE username="${username}"`;
  conn.query(sql, function (err, result) {
    if (err) throw err;
    let dbPass = result[0].password;
    bcrypt.compare(password, dbPass, function (err, hashCompare) {
      if (err) throw err;
      if (hashCompare) {
        res.send("Logging you in!");
      } else {
        res.send("Invalid password!");
      }
    });
  });
});

module.exports = router;
