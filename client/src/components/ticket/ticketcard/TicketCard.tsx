import { ITicket } from "../../../models/ITicket";

interface TicketCardProps {
    ticket: ITicket;
}

export function TicketCard(props: TicketCardProps) {

    function reverseString(stringToReverse: string) {
        return stringToReverse.split('-').reverse().join('-')
    }

    function showDateCorrectly(date: string) {
        return reverseString
        (date.toString().split("T")[0])
    }

    return (
        <div className="ticket-card">
            <div className="ticket-card-name">
                <h3>{props.ticket.title}</h3>
            </div>
            <div className="ticket-card-description">
                <p>{props.ticket.description}</p>
            </div>
            <div className="ticket-card-customer">
                <p>{props.ticket.customerName}</p>
            </div>
            <div className="ticket-card-customer">
                <p>{props.ticket.customerAddress}</p>
            </div>
            <div className="ticket-card-technician">
                <p>{props.ticket.technicianName}</p>
            </div>
            <div className="ticket-card-technician">
                <p>{props.ticket.technicianPhone}</p>
            </div>
            <div className="ticket-card-warehouse">
                <p>{props.ticket.warehouseName}</p>
            </div>
            <div className="ticket-card-date">
                <p>{showDateCorrectly(props.ticket.date)}</p>
            </div>
        </div>

    );
}