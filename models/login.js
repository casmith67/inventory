const conn = require("./utilities");
const bcrypt = require("bcryptjs");
const path = require("path");

function verifyCredentials(res, req, passToCompare) {
  bcrypt.compare(req.body.password, passToCompare, function(err, success) {
    if (err) throw err;
    if (success) {
      req.session.loggedIn = true;
      res.send("You have successfully logged in");
    } else {
      res.send("Invalid password");
    }
  });
}

module.exports.authenticateUser = function(req, res) {
  let username = req.body.username;
  let sql = `SELECT password FROM users WHERE username='${username}'`;
  conn.query(sql, function(err, result) {
    if (err) console.log(err);
    if (result != "") {
      verifyCredentials(res, req, result[0].password);
    } else {
      res.send("You don't have an account with us!");
    }
  });
};
