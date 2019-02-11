const conn = require("./utilities");
const bcrypt = require("bcryptjs");

function verifyCredentials(res, req, passToCompare, user) {
  bcrypt.compare(req.body.password, passToCompare, function (err, success) {
    if (err) console.log(err);
    if (success) {
      req.session.loggedIn = true;
      req.session.username = user.username;
      req.session.age = user.age;
      req.session.role = user.role;
      req.session.userId = user.id;
      res.render("index", {
        id: user.id,
        loggedIn: req.session.loggedIn,
        username: req.body.username,
        age: user.age
      });
    } else {
      res.send("Invalid password");
      return false;
    }
  });
}

module.exports.authenticateUser = function (req, res) {
  let username = req.body.username;
  let sql = `SELECT userID, password, age, role FROM users WHERE username='${username}'`;
  conn.query(sql, function (err, result) {
    if (err) console.log(err);
    if (result != "") {
      let user = {
        username: username,
        age: result[0].userAge,
        role: result[0].role,
        id: result[0].userID
      };

      verifyCredentials(res, req, result[0].password, user);
    } else {
      res.send("You don't have an account with us!");
    }
  });
};
