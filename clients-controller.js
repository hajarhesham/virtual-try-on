const asyncHandler = require('express-async-handler')
const Client = require('./models/clientModel')

const getClients = asyncHandler(async (req,res) => {
    const clients = await Client.find()
    res.status(200).json(clients)
}); 

// get client by id
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
    const id = req.params.id;
    const body = req.body;
    const clientIndex = await Client.updateOne({_id: id}, {$set: body});
    res.status(200).send(clientIndex);
});

// delete client by id
const deleteClientById = asyncHandler(async (req,res) => {
    const client = await Client.findById(req.params.clientId)
    if (!client) {
        res.status(400)
        throw new Error('client not found')
    }
    await client.remove()
    res.status(200).json({msg: "removed sucessfully"})
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

