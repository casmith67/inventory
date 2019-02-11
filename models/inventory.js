const conn = require("../models/inventory_credentials");

module.exports.getSupplies = function (callback) {

  // SQL query
  let sql = `SELECT * FROM supplies`;

  conn.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result);
    }
  });

}
