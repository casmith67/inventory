// Add supply to inventory
let conn = require("../models/inventory_credentials");

module.exports.updateInventory = function (callback, itemNumber, supplyName, description, quantity) {
  let sql = `INSERT INTO supplies(item_number, item_name, item_desc, item_count) VALUES("${itemNumber}", "${supplyName}", "${description}", "${quantity}")`

  conn.query(sql, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}