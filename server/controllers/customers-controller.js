const express = require("express");
const router = express.Router();
const customerLogic = require("../logic/customers-logic.js");

router.post("/", async (request, response, next) => {
    let customerDetails = request.body;
    try {
        await customerDetails.addCustomer(customerDetails);
        response.json();
    }
    catch (error) {
        console.error(error);
        response.status(500).send(error.message);
    }
});

router.get("/", async (request, response, next) => {
    try {
        let customers = await customerLogic.getAllCustomers();
        response.json(customers);
    }
    catch (error) {
        console.error(error);
    }
});

module.exports = router;