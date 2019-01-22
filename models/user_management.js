const conn = require("./utilities");

var sql = "SELECT id, username, age FROM users";

var users = new Array();

conn.query(sql, (err, result) => {
  if (err) console.log(err);
  for (var i = 0; i < result.length; i++) {
    var userId = result[i].id;
    var username = result[i].username;
    var age = result[i].age;
    users[userId] = new Array(username, age);
  }
});

module.exports.getUsers = function() {
  return users;
};
