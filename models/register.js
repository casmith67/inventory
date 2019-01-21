const conn = require("./utilities");
const bcrypt = require("bcryptjs");

function addUser(res, username, hash, age) {
  let sql = `INSERT INTO users(username, password, userAge) VALUES('${username}', '${hash}', '${age}')`;
  conn.query(sql, function(err, result) {
    if (err) throw err;
    res.render("index", {
      username: username
    });
  });
}

function hashPassword(res, username, password, age) {
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) throw err;
    addUser(res, username, hash, age);
  });
}

module.exports.CheckForDuplicates = function(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let age = req.body.age;
  let sql = `SELECT username FROM users WHERE username='${username}'`;
  conn.query(sql, function(err, result) {
    if (result == "") {
      hashPassword(res, username, password, age);
    } else {
      res.send("You currently have an account with us!");
    }
  });
};
