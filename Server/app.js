require("./data/dal");
const express = require("express");
const cors = require("cors");
const leadsController = require("./controller/lead");
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/leads", leadsController);
server.listen(3000, () => console.log("Listening on http://localhost:3000"));