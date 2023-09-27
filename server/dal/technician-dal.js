const connection = require("./connection-wrapper");

async function createTechnician(technician) {
    let sql = "INSERT INTO technicians (name, phone) VALUES (?, ?)";
    let parameters = [technician.name, technician.phone];
    await connection.executeWithParameters(sql, parameters);

}
async function isTechnicianExists(name, phone) {
    let sql = "SELECT name, phone from techsupport.technicians WHERE name = ? and phone  = ?";
    let parameters = [name, phone];
    let [technicians] = await connection.executeWithParameters(sql, parameters);
    if (technicians && technicians.length > 0) {
        return true;
    }
    return false;
}

async function getAllTechnicians() {
    let sql = `SELECT
    id,
    name,
    phone
FROM
    technicians
`;
    let technicians = await connection.executeWithParameters(sql);
    if (!technicians) {
        throw new Error(`no technicians found`);
    }
    return technicians;
}
module.exports = {
    createTechnician,
    isTechnicianExists,
    getAllTechnicians
}
