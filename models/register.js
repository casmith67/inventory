const conn = require("./utilities");
const bcrypt = require("bcryptjs");

function addUser(req, res, username, hash, age) {
  req.session.loggedIn = true;
  let sql = `INSERT INTO users(username, password, age) VALUES('${username}', '${hash}', '${age}')`;
  conn.query(sql, function(err, result) {
    if (err) console.log(err);
    res.render("index", {
      username: username
    });
  });
}

function hashPassword(req, res, username, password, age) {
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) console.log(err);
    addUser(req, res, username, hash, age);
  });
}

module.exports.CheckForDuplicates = function(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let age = req.body.age;
  let sql = `SELECT username FROM users WHERE username='${username}'`;
  conn.query(sql, function(err, result) {
    console.log(result);
    if (result == "") {
      hashPassword(req, res, username, password, age);
    } else {
      res.send("You currently have an account with us!");
    }
  });
};
