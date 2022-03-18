const express = require("express");
const bodyParser = require("body-parser");
const clientsController = require("./clients-controller.js");
const posesController = require("./poses-controller.js");

const app = express();
app.use(bodyParser.json());

// get client by id
app.get("/clients/:clientId",clientsController.getClientById);

// get client measurements by id
app.get("/clients/:clientId/measurements",clientsController.getMeasurementsById);

// get client poses ids
app.get("/clients/:clientId/poses",clientsController.getAllPoses);

// get client theta by id
app.get("/poses/:poseId/name",posesController.getNameById);

// get client theta by id
app.get("/poses/:poseId/theta",posesController.getThetaById);

// get client photo by id
app.get("/clients/:clientId/photo",clientsController.getPhotoById);

// get client gender by id
app.get("/clients/:clientId/gender",clientsController.getGenderById);

// add new client 
app.post("/clients", clientsController.createClientHandler);

// update client info 
app.put("/clients/:id", clientsController.updateClientHandler);


// delete client by id
// delete client pose by id
// delete client poses
// delete client photo
// delete client name

app.listen(8080, ()=>
    console.log("Server is running on http://localhost:8080")
);
