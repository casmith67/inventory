const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const conn = require("./utilities");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.use(bodyParser.urlencoded());

router.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../register.html"));
});

router.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // Make sure there are no duplicates
  let sql = `SELECT username FROM users WHERE username='${username}'`;
  conn.query(sql, function(err, result) {
    if (result == "") {
      bcrypt.hash(password, 10, function(err, hash) {
        if (err) throw err;
        let sql = `INSERT INTO users(username, password) VALUES('${username}', '${hash}')`;
        conn.query(sql, function(err, result) {
          if (err) throw err;
          res.send("Thank you for signing up!");
        });
      });
    } else {
      res.send("You currently have an account with us!");
    }
  });
});

module.exports = router;
