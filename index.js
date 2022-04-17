const express = require("express");
const clientsController = require("./clients-controller.js");
const posesController = require("./poses-controller.js");

require('./config/db')();

const app = express();
app.use(express.json());

// get all clients
app.get("/clients",clientsController.getClients);

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


// update client info 
app.put("/clients/:id", clientsController.updateClientHandler);

// update client poses
app.put("/clients/:clientId/poses",clientsController.deleteClientPoses)

// update client photo
app.put("/clients/:clientId/photo",clientsController.deleteClientPhoto)

// update client name
app.put("/clients/:clientId/name",clientsController.deleteClientName)


// add new pose
app.post("/clients", posesController.createPoseHandler);

// add new client 
app.post("/clients", clientsController.createClientHandler);


// delete client by id
app.delete("/clients/:clientId",clientsController.deleteClientById);

// delete client pose by id
app.delete("/poses/:poseId",posesController.deleteClientPoseById)


app.listen(8080, ()=>
    console.log("Server is running on http://localhost:8080")
);

