const warehousesDal = require('../dal/warehouses-dal');

async function getAllWarehouses() {

        let warehouses = await warehousesDal.getAllWarehouses();
        return warehouses;
}

module.exports = { getAllWarehouses }