const connection = require("./connection-wrapper.js");

async function createTicket(ticket) {
    let sql = "INSERT INTO tickets (title, description, customer_id, hardware, technician_id, warehouse_id, date) VALUES (?, ?, ?, ?, ?, ?, ?)";
    let parameters = [ticket.title, ticket.description, ticket.customer.id, ticket.hardware, ticket.technician.id, ticket.warehouse.id, ticket.date];
    await connection.executeWithParameters(sql, parameters);
}

async function isTicketExists(title, date) {
    let sql = "SELECT title, date from techsupport.tickets WHERE title = ? and date  = ?";
    let parameters = [title, date];
    let [tickets] = await connection.executeWithParameters(sql, parameters);
    if (tickets && tickets.length > 0) {
        return true;
    }
    return false;
}

const getTicket = async (id) => {
    let sql = `SELECT
    tickets.title,
    tickets.description,
    customers.name AS customer_name,
    customers.address AS customer_address,
    technicians.name AS technician_name,
    technicians.phone AS technician_phone,
    warehouses.name AS warehouse_name,
    tickets.date
FROM
    tickets
INNER JOIN
    customers ON tickets.customer_id = customers.id
INNER JOIN
    technicians ON tickets.technician_id = technicians.id
INNER JOIN
    warehouses ON tickets.warehouse_id = warehouses.id
WHERE
    tickets.id = ?`;
    let parameters = [id];
    let ticket = await connection.executeWithParameters(sql, parameters);
    if (!ticket) {
        throw new Error(`no Tickets found`);
    }
    return ticket;

}

const getAllTickets = async () => {
    let sql = `SELECT
    tickets.title,
    tickets.description,
    customers.name AS customer_name,
    customers.address AS customer_address,
    technicians.name AS technician_name,
    technicians.phone AS technician_phone,
    warehouses.name AS warehouse_name,
    tickets.date
FROM
    tickets
INNER JOIN
    customers ON tickets.customer_id = customers.id
INNER JOIN
    technicians ON tickets.technician_id = technicians.id
INNER JOIN
    warehouses ON tickets.warehouse_id = warehouses.id
`;

    let tickets = await connection.executeWithParameters(sql);
    if (!tickets) {
        throw new Error(`no Tickets found`);
    }
    return tickets;

}

module.exports = {
    createTicket,
    isTicketExists,
    getTicket,
    getAllTickets
    // getTicketByTechnicianId

}
