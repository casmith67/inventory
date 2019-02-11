// Add supply to inventory
module.exports.updateInventory = (supplyName, supplyDesc, supplyCount, callback) => {
  let conn = require("../models/inventory_credentials");

  let sql = `INSERT INTO supplies(item_name, item_desc, item_count) VALUES('${supplyName}', '${supplyDesc}', ${supplyCount})`

  conn.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, result)
    }
  });
}