const connection = require("./connection-wrapper");

async function addCustomer(customer) {
    let sql = "INSERT INTO customer (name, phone) VALUES (?, ?)";
    let parameters = [customer.name, customer.phone];
    await connection.executeWithParameters(sql, parameters);


}
async function isCustomerExists(name, address) {
    let sql = "SELECT name, phone from techsupport.technicians WHERE name = ? and phone  = ?";
    let parameters = [name, address];
    let [customers] = await connection.executeWithParameters(sql, parameters);
    if (customers && customers.length > 0) {
        return true;
    }
    return false;
}

async function getAllCustomers() {

    let sql = `SELECT
    id, name, address
FROM

    customers
`;
    let customers = await connection.executeWithParameters(sql);
    if (!customers) {
        throw new Error(`no customers found`);
    }
    return customers;

}

    module.exports = {
        addCustomer,
        isCustomerExists,
        getAllCustomers
    }
