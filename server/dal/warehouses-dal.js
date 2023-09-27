const connection = require("./connection-wrapper.js");

async function getAllWarehouses() {
    let sql = `SELECT
    id,
    name,
    pinpad_stock,
    weight_Stock,
    scanner_stock,
    boimetric_reader_stock

FROM
    warehouses
`;


    let warehouses = await connection.executeWithParameters(sql);
    if (!warehouses) {
        throw new Error(`no warehouses found`);
    }
    return warehouses;
}
module.exports = {
    getAllWarehouses
}