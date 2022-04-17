const express = require("express");
const color = require('color')
const bodyParser = require("body-parser");
const clientsController = require("./clients-controller.js");
const posesController = require("./poses-controller.js");
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')


connectDB()


const app = express();
app.use(bodyParser.json());

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

// add new client 
app.post("/clients", clientsController.createClientHandler);

// update client info 
app.put("/clients/:id", clientsController.updateClientHandler);


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




// add new pose
app.post("/clients", posesController.createPoseHandler);

app.listen(8080, ()=>
    console.log("Server is running on http://localhost:8080")
);

