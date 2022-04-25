const express = require("express");
const clientsController = require("./clients-controller.js");
const posesController = require("./poses-controller.js");
const exphbs = require("express-handlebars")

require('./config/db')();

const app = express();
app.use(express.json());

// handlebars middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');


// to handle the form data
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => res.render('index'));
app.post("/", clientsController.createClientHandler);

// get all clients
app.get("/clients",clientsController.getClients);

// get client by id
app.get("/clients/:clientId",clientsController.getClientById);

// get client measurements by id
app.get("/clients/:clientId/measurements",clientsController.getMeasurementsById);

// get client poses ids
app.get("/clients/:clientId/poses",clientsController.getAllPoses);

// get poses
app.get("/poses",posesController.getPoses);

// get pose by id
app.get("/poses/:poseId",posesController.getPoseById);

// get pose name by id
app.get("/poses/:poseId/name",posesController.getNameById);

// get pose theta by id
app.get("/poses/:poseId/theta",posesController.getThetaById);

// get client photo by id
app.get("/clients/:clientId/photo",clientsController.getPhotoById);

// get client gender by id
app.get("/clients/:clientId/gender",clientsController.getGenderById);

// update client info 
app.put("/clients/:id", clientsController.updateClientHandler);

// add new pose
app.post("/poses", posesController.createPoseHandler);

// add new client 
app.post("/clients/add", clientsController.createClientHandler);

// delete client by id
app.delete("/clients/:clientId",clientsController.deleteClientById);

// delete client pose by id
app.delete("/poses/:poseId",posesController.deleteClientPoseById)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>
    console.log(`Server is running on ${PORT}`)
);
