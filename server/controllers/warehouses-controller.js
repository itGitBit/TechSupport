const express = require('express');
const router = express.Router();

const warehousesLogic = require('../logic/warehouses-logic.js');

router.get('/', async (request, response, next) => {

    let warehouses = await warehousesLogic.getAllWarehouses();
    response.json(warehouses);
});
module.exports = router;