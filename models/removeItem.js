let conn = require("../models/inventory_credentials");

module.exports.removeItem = function (callback, item_number) {
    let sql = `DELETE FROM supplies WHERE item_number=${item_number}`;

    conn.query(sql, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}