const technicianDal = require('../dal/technician-dal');

const createTechnician = async (newTechnicianData) => {
    validateTechnicianDetails(newTechnicianData);
    if (await technicianDal.isTechnicianExists(newTechnicianData.name, newTechnicianData.phone)) {
        throw new Error("Technician already exists");
    }
    await technicianDal.createTechnician(newTechnicianData);
}

const getAllTechnicians = async () => {
        let technicians = await technicianDal.getAllTechnicians();
        return technicians;
}

    function validateTechnicianDetails(technician) {
        switch (true) {
            case !technician.name:
                throw new Error("Name is missing");
            case !technician.phone:
                throw new Error("Phone is missing");
            case technician.name.length < 2:
                throw new Error("Name is too short");
            case technician.phone.length < 8:
                throw new Error("Phone is too short");
            case technician.phone.length > 10:
                throw new Error("Phone is too long");
            case isNaN(technician.phone):
                throw new Error("Phone is not a number");
        }

    }


module.exports = {
    createTechnician,
    getAllTechnicians
}

