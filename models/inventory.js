const conn = require("../models/inventory_credentials");

module.exports.getSupplies = (cb) => {

  // SQL query
  let sql = `SELECT * FROM supplies`;

  conn.query(sql, function (err, result) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, result)
    }
  });

}
