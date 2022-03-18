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



app.listen(3000, ()=>
    console.log("Server is running on http://localhost:3000")
);