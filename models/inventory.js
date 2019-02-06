let conn = require("../models/inventory_credentials");

let sql = `SELECT * FROM supplies`;

let supplies = new Array();

function runQuery() {
  conn.query(sql, (err, result) => {
    if (err) console.log(err);

    for (let i = 0; i < result.length; i++) {
      if (result) {
        supplies[i] = [];
        supplies[i].push(result[0].item_number);
      }
    }
  });
}

module.exports.grabSupplies = function(req, res) {
  runQuery();
};
