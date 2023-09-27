const express = require('express');
const cors = require('cors');
// const loginFilter = require('./filters/login-filter.js');

const ticketsController = require('./controllers/tickets-controller.js');
const techniciansController = require('./controllers/technicians-controller.js');
const warehousesController = require('./controllers/warehouses-controller.js');
const customersController = require('./controllers/customers-controller.js');
const server = express();

server.use(cors({ origin: "http://localhost:3000"}));
server.use(express.json());

server.use("/tickets", ticketsController);
server.use("/technicians", techniciansController);
server.use("/warehouses", warehousesController);
server.use("/customers", customersController);



server.listen(3001, () => {
    console.log('Server is listening on localhost:3001...');
});