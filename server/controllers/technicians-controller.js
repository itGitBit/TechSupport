const express = require("express");
const router = express.Router();
const technicianLogic = require("../logic/technician-logic.js");

router.post("/", async (request, response, next) => {
    let technicianregistrationDetails = request.body;
    try {
        await technicianLogic.createTechnician(technicianregistrationDetails);
        response.json();
    }
    catch (error) {
        console.error(error);
        response.status(500).send(error.message);
    }
});
router.get("/", async (request, response, next) => {
    try {
        let technicians = await technicianLogic.getAllTechnicians();
        response.json(technicians);
    }
    catch (error) {
        console.error(error);
    }
});


router.get("/:id", async (request, response, next) => {
    let id = request.params.id;
    try {
        let Technician = await usersLogic.getTechnicianById(TechnicianId);
        response.json(user);
    }
    catch (error) {
        console.error(error);
        response.status(600).send(error.message);
    }
});




module.exports = router;