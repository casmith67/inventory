const conn = require("./utilities");
const bcrypt = require("bcryptjs");

function addUser(res, username, hash) {
  let sql = `INSERT INTO users(username, password) VALUES('${username}', '${hash}')`;
  conn.query(sql, function(err, result) {
    if (err) throw err;
    res.send("Thank you for signing up!");
  });
}

function hashPassword(res, username, password) {
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) throw err;
    addUser(res, username, hash);
  });
}

module.exports.CheckForDuplicates = function(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let sql = `SELECT username FROM users WHERE username='${username}'`;
  conn.query(sql, function(err, result) {
    if (result == "") {
      hashPassword(res, username, password);
    } else {
      res.send("You currently have an account with us!");
    }
  });
};
