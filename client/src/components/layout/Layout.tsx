import { Route, Routes, useNavigate } from "react-router-dom";
import { AddTicket } from "../addticket/AddTicket";
import { TicketsContainer } from "../ticket/ticketscontainer/TicketsContainer";
import { useDispatch } from "react-redux";
import { Header } from "../header/Header";

export function Layout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return (

        <div className="layout">
            <header>
        <Header />
      </header>
            <Routes>
                <Route path="/addticket" element={<AddTicket />} />
                <Route path="/tickets" element={<TicketsContainer />} />
            </Routes>
        </div>
    );
}