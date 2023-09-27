const express = require('express');
const router = express.Router();
const ticketsLogic = require('../logic/tickets-logic.js');


//todo rewrite when exception handler is ready
router.post('/', async (request, response, next) => {
    let ticket = request.body;
    try {
        let addedTicket = await ticketsLogic.createTicket(ticket);
        response.json(addedTicket);
    }
    catch (error) {
        console.error(error);
        response.status(500).send(error.message);
    }
});

router.get('/:id', async (request, response, next) => {
    let id = request.params.id;
    try {
        let ticketFetched = await ticketsLogic.getTicket(id);
        response.json(ticketFetched);
        
    } catch (error) {
        console.error(error);
        response.status(500).send(error.message);
    }

}
);

router.get('/', async (request, response, next) => {
    let id = request.params.id;
    try {
        let tickets = await ticketsLogic.getAllTickets();
        response.json(tickets);
        
    } catch (error) {
        console.error(error);
        response.status(500).send(error.message);
    }

}
);


module.exports = router;
