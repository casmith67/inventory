const conn = require("./utilities");
const bcrypt = require("bcryptjs");

function verifyCredentials(res, req, passToCompare, age) {
  bcrypt.compare(req.body.password, passToCompare, function(err, success) {
    if (err) throw err;
    if (success) {
      req.session.loggedIn = true;
      res.render("index", {
        loggedIn: req.session.loggedIn,
        username: req.body.username,
        age: age
      });
    } else {
      res.send("Invalid password");
    }
  });
}

module.exports.authenticateUser = function(req, res) {
  let username = req.body.username;
  let sql = `SELECT password, userAge FROM users WHERE username='${username}'`;
  conn.query(sql, function(err, result) {
    if (err) console.log(err);
    if (result != "") {
      verifyCredentials(res, req, result[0].password, result[0].userAge);
    } else {
      res.send("You don't have an account with us!");
    }
  });
};
