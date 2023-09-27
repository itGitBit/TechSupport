import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { ITechnician } from "../../models/ITechnician";
import { IWarehouse } from "../../models/IWarehouse";
import { ICustomer } from "../../models/ICustomer";

export function AddTicket() {



    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [customer, setCustomer] = useState<ICustomer>({ id: 0, name: "", address: "" });
    let [hardware, setHardware] = useState('');
    let [technicianId, setTechnician] = useState('');
    let [warehouseId, setWarehouse] = useState('');
    let [date, setDate] = useState('');

    let hardwareList = [{ value: "pinpad", name: "Pinpad" }, { value: "weight", name: "Weight" }, { value: "scanner", name: "Scanner" }, { value: "biometricReader", name: "Biometric Reader" }];
    let [technicians, setTechnicians] = useState<ITechnician[]>([]);
    let [warehouses, setWarehouses] = useState<IWarehouse[]>([]);
    let [customers, setCustomers] = useState<ICustomer[]>([]);


    async function getTechnicians() {
        try {
            let response = await axios.get("http://localhost:3001/technicians");
            setTechnicians(response.data);
        }
        catch (error) { alert(`Error ${error}`); }
    }

    async function getWarehouses() {
        try {
            let response = await axios.get("http://localhost:3001/warehouses");
            setWarehouses(response.data);
        }
        catch (error) { alert(`Error ${error}`); }
    }

    async function getCustomers() {
        try {
            let response = await axios.get("http://localhost:3001/customers");
            setCustomers(response.data);
        } catch (error) { alert(`Error ${error}`); }


    }

    const initDropdowns = async () => {
        await getTechnicians();
        await getWarehouses();
    }

    useEffect(() => {
        initDropdowns(); getCustomers();
    }, []);

    function getTechnician(techId: number): ITechnician {
        return technicians[techId];
    }




    function warehouseDropdown(warehouses: IWarehouse[]) {
        return (
            <div className="dropdown">
                <select className="dropdown" onChange={e => setWarehouse(e.target.value)}>
                    <option value="0">Select</option>
                    {warehouses.map((warehouse => <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>))}
                </select>
            </div>
        );
    }

    function techniciansDropdown(technicians: ITechnician[]) {
        return (
            <div className="dropdown">
                <select className="dropdown" onChange={e => setTechnician(e.target.value)}>
                    <option value="0">Select</option>
                    {technicians.map((technician => <option key={technician.id} value={technician.id}>{technician.name}</option>))}
                </select>
            </div>
        );
    }
    function hardwareDropdown() {
        return (
            <div className="dropdown">
                <select className="dropdown" onChange={e => setHardware(e.target.value)}>
                    <option value="0">Select</option>
                    {hardwareList.map(((hardware, index) => <option key={index} value={hardware.value}>{hardware.name}</option>))}
                </select>
            </div>
        );
    }





    async function addTicket() {
        try {
            let technician = technicians.find(t => t.id === parseInt(technicianId));
            let warehouse = warehouses.find(w => w.id === parseInt(warehouseId));
            let ticket = { title, description, customer, hardware, technician, warehouse, date };
            debugger;
            let response = await axios.post("http://localhost:3001/tickets", ticket);
            alert("Ticket added");
        }
        catch (error) { alert(`Ticket was not added ${error}`); }
    }

    function searchForKeyWords(customerName: string) {
        if (customerName.length < 3) {
            return;
        }
        let customersFiltered = customers.filter(customer => customer.name.toLowerCase().includes(customerName.toLowerCase()));
        if (customersFiltered) {
            setCustomer(customersFiltered[0]);
        }
    }




    return (
        <div className="add-ticket-div">
            <h1>Add Ticket</h1>
            <form className="add-ticket-form">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} /><br />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} /><br />
                <label htmlFor="customer">Customer</label>
                <input type="text"  id="customer" onChange={e => searchForKeyWords(e.target.value)} /><br />
                <label htmlFor="hardware">Hardware</label>
                {/* <input type="text" id="hardware" value={hardware} onChange={e => setHardware(e.target.value)} />
                     */}
                {hardwareDropdown()}
                <label htmlFor="technic">Technician</label>
                {/* <input type="text" id="technic" value={technic} onChange={e => setTechnician(e.target.value)} /> */}
                {techniciansDropdown(technicians)}

                <div className="dropdown">
                    <label htmlFor="warehouse">Warehouse</label>{warehouseDropdown(warehouses)}
                </div>
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} /><br />
                <button type="button" onClick={addTicket}>Add Ticket</button>
            </form>


        </div>
    );
}

