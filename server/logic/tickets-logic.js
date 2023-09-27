const ticketsDal = require('../dal/tickets-dal');

const createTicket = async (newTicketData) => {
    validateTicketDetails(newTicketData);
    if (await ticketsDal.isTicketExists(newTicketData.title, newTicketData.date)) {
        throw new Error("Ticket title already exists");
    }
    await ticketsDal.createTicket(newTicketData);
}

const getTicket = async (id) => {
        let ticket = await ticketsDal.getTicket(id);
        return ticket;

}

const getAllTickets = async () => {

        let tickets = await ticketsDal.getAllTickets();
        return tickets;

}

//todo add validations
const validateTicketDetails = (ticket) => {
    switch (true) {
        case !ticket.title:
            throw new Error("Title is missing");
            break;
        case !ticket.description:
            throw new Error("Description is missing");
            break;
        case !ticket.customer:
            throw new Error("Customer is missing");
            break;
        case !ticket.hardware:
            throw new Error("Hardware needed is missing");
            break;
        case !ticket.technician:
            throw new Error("Technician is missing");
            break;
        case !ticket.warehouse:
            throw new Error("Warehouse is missing");
            break;
        case !ticket.date:
            throw new Error("Date is missing");
            break;
        case ticket.title.length < 2:
            throw new Error("Title is too short");
            break;
        case ticket.description.length < 2:
            throw new Error("Description is too short");
            break;

    }
}
module.exports = {
    createTicket,
    getTicket,
    getAllTickets
}