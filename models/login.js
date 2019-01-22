const conn = require("./utilities");
const bcrypt = require("bcryptjs");

function verifyCredentials(res, req, passToCompare, age, role, id) {
  bcrypt.compare(req.body.password, passToCompare, function(err, success) {
    if (err) throw err;
    if (success) {
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      req.session.age = age;
      req.session.role = role;
      req.session.userId = id;
      res.render("index", {
        id: req.session.userId,
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
  let sql = `SELECT id, password, age, role FROM users WHERE username='${username}'`;
  conn.query(sql, function(err, result) {
    if (err) console.log(err);
    if (result != "") {
      verifyCredentials(
        res,
        req,
        result[0].password,
        result[0].userAge,
        result[0].role,
        result[0].id
      );
    } else {
      res.send("You don't have an account with us!");
    }
  });
};
