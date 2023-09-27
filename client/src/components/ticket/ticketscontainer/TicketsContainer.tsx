import { useEffect, useState } from "react";
import { ITicket } from "../../../models/ITicket";
import { TicketCard } from "../ticketcard/TicketCard";
import { get } from "http";
import axios from "axios";

export function TicketsContainer() {
    let [tickets, setTickets] = useState<ITicket[]>([]);

    useEffect(() => { getTickets() }, []);

    async function getTickets() {
        try {
            let response = await axios.get("http://localhost:3001/tickets");
            setTickets(response.data);
        }
        catch (error) { alert(`Error ${error}`); }
    }

    return (
        <div className="tickets-container">
            {tickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)}
        </div>
    );

}