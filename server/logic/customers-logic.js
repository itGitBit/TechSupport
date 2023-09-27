const customerDal = require('../dal/customers-dal');

async function addCustomer(customer) {
    validateCustomerDetails(customer);
    if (await customerDal.isCustomerExists(customer.name, customer.phone)) {
        throw new Error("Customer already exists");
    }
    await customerDal.addCustomer(customer);
}

async function getAllCustomers() {
        let customers = await customerDal.getAllCustomers();
        return customers;
}

module.exports = {
    addCustomer,
    getAllCustomers
}