const express = require("express");
const router = express.Router();
const lead = require("../models/lead");
const leadsLogic = require("../logic/lead-logic");

router.get("/", async (request, response) => {
  try {
    const Leads = await leadsLogic.getAllLeads();
    response.json(Leads);
  } catch (error) {
    response.status(500).send(error);
  }
});

// GET >> http://localhost:3000/api/leads/lead/621c535a815cc61e794e7558
router.get("/lead/:id", async (request, response) => {
  const id = request.params.id;
  console.log(id);
  try {
    const lead = await leadsLogic.getOneLead(id);
    response.json(lead);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.post("/", async (request, response) => {
  const newLead = new lead(request.body);
  try {
    const lead = await leadsLogic.addOneLead(newLead);
    response.json(lead);
  } catch (error) {
    response.status(500).send(error);
  }
});

// PUT http://localhost:3000/api/leads/lead/:_id
router.put("/lead/:_id", async (request, response) => {
  const leadUpdate = new lead(request.body);

  try {
    const lead = await leadsLogic.updateLead(leadUpdate);
    response.json(lead);
  } catch (error) {
    response.status(500).send(error);
  }
});


router.delete("/lead/:id", async (request, response) => {
    
    try {
      const id = request.params.id;
      await leadsLogic.deleteOneLead(id);
      response.sendStatus(204);

    } catch (error) {
      response.status(500).send(error);
    }
  });
module.exports = router;