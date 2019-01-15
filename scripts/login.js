const conn = require("./utilities");
const bcrypt = require("bcryptjs");

function verifyCredentials(res, password, passToCompare) {
  console.log(`Pass ${passToCompare}`);
  bcrypt.compare(password, passToCompare, function(err, success) {
    if (err) throw err;
    if (success) {
      res.send("You have logged in.");
    } else {
      res.send("Invalid password");
    }
  });
}

module.exports.authenticateUser = function(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let sql = `SELECT password FROM users WHERE username='${username}'`;
  conn.query(sql, function(err, result) {
    if (err) console.log(err);
    if (result != "") {
      verifyCredentials(res, password, result[0].password);
    } else {
      res.send("You don't have an account with us!");
    }
  });
};
