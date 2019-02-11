// Add supply to inventory
let conn = require("../models/inventory_credentials");

module.exports.updateInventory = function (callback, supplyName, description, quantity) {
  let sql = `INSERT INTO supplies(item_name, item_desc, item_count) VALUES('${supplyName}', '${description}', ${quantity})`

  conn.query(sql, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}