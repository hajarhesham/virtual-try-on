let clientsDB = [
    {
        id:0,
        name:"fathy",
        photo:"pic", // pic.jpg.enc
        poses:[
            {id:0},
            {id:1}
        ],
        measurements:{
            height:170,
            weight:80,
            chest:50,
            waist:40,
            hip:40,
            inseam:90,
            sholder:50
        },
        gender:"Male"
    },
];

const asyncHandler = require('express-async-handler')
const Client = require('./models/clientModel')

//working
const getClients = asyncHandler(async (req,res) => {
    const clients = await Client.find()
    res.status(200).json(clients)
}); 

// get client by id
//working
const getClientById = asyncHandler(async (req,res) => {

    const client = await Client.findById(req.params.clientId)
    if (!client) {
        res.status(400)
        throw new Error('client not found')
    }else {
        res.status(200).json(client)
    }
});    

// get client measurements by id
// working
const getMeasurementsById = asyncHandler(async (req,res) => {
    const client = await Client.findById(req.params.clientId)
    if (!client) {
        res.status(400)
        throw new Error('client not found')
    }else {
        res.status(200).json(client.measurements)
    }
});

// get client poses ids
// working
const getAllPoses = asyncHandler(async (req,res) => {
    const client = await Client.findById(req.params.clientId)
    if (!client) {
        res.status(400)
        throw new Error('client not found')
    }else {
        res.status(200).json(client.poses)
    }
});

// get client photo by id
// working
const getPhotoById = asyncHandler(async (req,res) => {
    const client = await Client.findById(req.params.clientId)
    if (!client) {
        res.status(400)
        throw new Error('client not found')
    }else {
        res.status(200).json(client.photo)
    }
});

// get client gender by id
//working
const getGenderById = asyncHandler(async (req,res) => {
    const client = await Client.findById(req.params.clientId)
    if (!client) {
        res.status(400)
        throw new Error('client not found')
    }else {
        res.status(200).json(client.gender)
    }
});

// add new client 
//working
const createClientHandler = asyncHandler(async (req, res) => {

    const client = await Client.create({
        name: req.body.name,
        photo: req.body.photo,
        gender: req.body.gender,
        measurements: req.body.measurements,
        poses: req.body.poses
    })

    res.status(200).json(client)
});

// update client 
const updateClientHandler = asyncHandler(async (req, res) => {

    const id = parseInt(req.params.id);
    const clientIndex = clientsDB.findIndex(
      (client) => client.id === id
     );
    if (clientIndex !== -1) {
        clientsDB[clientIndex] = {
         ...clientsDB[clientIndex],
         ...req.body,
        };
        res.send(clientsDB[clientIndex]);
    } else {
        res.status(404).send({ error: "NOTFOUND" });
    }
});

// delete client by id
// working
const deleteClientById = asyncHandler(async (req,res) => {
    const client = await Client.findById(req.params.clientId)
    if (!client) {
        res.status(400)
        throw new Error('client not found')
    }
    await client.remove()
    res.status(200).json({msg: "removed sucessfully"})
})
   
// delete client poses
const deleteClientPoses = asyncHandler(async (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].poses = null
        res.send('Poses have been deleted')
    }
})

// delete client photo
const deleteClientPhoto = asyncHandler(async (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].photo = null;
        res.send('photo has been deleted');
    }
    
})

// delete client name
const deleteClientName = asyncHandler(async (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].name = null;
        res.send('Name has been deleted');
    }
})

module.exports = {
    getClients,
    getClientById,
    getMeasurementsById,
    getAllPoses,
    getPhotoById,
    getGenderById,
    updateClientHandler, 
    createClientHandler,
    deleteClientById,
    deleteClientPoses,
    deleteClientPhoto,
    deleteClientName
};

