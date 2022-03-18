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



// get client measurements by id
// get client poses ids & names
// get client photo by id
// get client gender by id

// add new client 

// update client measurements
// update client gender 
// update client photo
// update client name

// delete client by id
const deleteClientById = (req,res) => {
    const clientId = parseInt(req.params.clientId);
    clientsDB = clientsDB.filter((client) => client.id !== clientId);
    res.send({ message: `client with id:${req.params.clientId} has been deleted successfully` });
}
   

// delete client poses
const deleteClientPoses = (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].poses = null
        res.send('Poses have been deleted')
    }
}

// delete client photo
const deleteClientPhoto = (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].photo = null;
        res.send('photo has been deleted');
    }
    
}

// delete client name
const deleteClientName = (req,res)=>{
    const clientId = parseInt(req.params.clientId);
    const client = clientsDB.find((client) => client.id === clientId)
    if(client){
        clientsDB[clientId].name = null;
        res.send('Name has been deleted');
    }
}


module.exports = {
    deleteClientById,
    deleteClientPoses,
    deleteClientPhoto,
    deleteClientName
};