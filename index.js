const express = require("express");
const bodyParser = require("body-parser");
const clientsController = require("./clients-controller.js");
const posesController = require("./poses-controller.js");


const app = express();
app.use(bodyParser.json());

// get client measurements by id
// get client poses ids & names
// get client theta by id
// get client photo by id
// get client gender by id

// add new client 

// update client measurements
// update client gender 
// update client photo
// update client name

// delete client by id
app.delete("/clients/:clientId",clientsController.deleteClientById);
// delete client pose by id
app.delete("/poses/:poseId",posesController.deleteClientPoseById)
// delete client poses
app.put("/clients/:clientId/poses",clientsController.deleteClientPoses)
// delete client photo
app.put("/clients/:clientId/photo",clientsController.deleteClientPhoto)
// delete client name
app.put("/clients/:clientId/name",clientsController.deleteClientName)

app.listen(8080, ()=>
    console.log("Server is running on http://localhost:8080")
);