let conn = require("../models/inventory_credentials");

let sql = `SELECT * FROM supplies`;

let supplies = new Array();

conn.query(sql, (err, result) => {
  if (err) console.log(err);

  for (let i = 0; i < result.length; i++) {
    if (result) {
      supplies.push(result[i])
    }
  }

  module.exports.grabSupplies = function() {
    console.log(supplies)
    return supplies;
  }
});

module.exports.updateSupplies = (supplyName, supplyDesc, supplyCount) => {
  let conn = require("../models/inventory_credentials");

  let sql = `INSERT INTO supplies(item_name, item_desc, item_count) VALUES('${supplyName}', '${supplyDesc}', ${supplyCount})`
    
  conn.query(sql, (err, result) => {
    if (err) console.log(err);

    console.log("Item succesfully added")
  });
}