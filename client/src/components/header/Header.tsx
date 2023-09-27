import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionType } from "../../redux/ActionType";

export function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChangeComponent = (path: string) => navigate(path);

    function onChangeSearch(event: ChangeEvent<HTMLInputElement>): void {
        let searchInput = event.target.value;
        dispatch({ type: ActionType.SEARCH, payload: searchInput });
    }

    return (
        <div className="header">
            <h1>Header</h1>
            <input type="button" value="Add Ticket" onClick={()=> onChangeComponent('/addticket')} />
            <input type="button" value="Get Tickets" onClick={()=> onChangeComponent('/tickets')} />
        </div>
    );
}