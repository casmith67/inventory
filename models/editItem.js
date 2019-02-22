let conn = require("../models/inventory_credentials");

module.exports.editInventory = function (callback, itemNumber, name, description, quantity) {
    let sql = `UPDATE supplies SET 'item_name'='${name}', 'item_desc'='${description}', 'item_count'='${quantity}', WHERE item_number='${itemNumber}'`;

    conn.query(sql, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}