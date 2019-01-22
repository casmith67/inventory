const conn = require("./utilities");

var sql = "SELECT id, username, age FROM users";

var users = new Array();

function deleteUser(username) {
  var sql = `DELETE FROM users WHERE username=${username}`;
}

function runQuery() {
  conn.query(sql, (err, result) => {
    if (err) console.log(err);
    for (var i = 0; i < result.length; i++) {
      var userId = result[i].id;
      var username = result[i].username;
      var age = result[i].age;
      users[userId] = new Array(username, age);
      console.log(users[userId]);
    }
  });
}

module.exports.getUsers = function() {
  runQuery()
  return users;
};
