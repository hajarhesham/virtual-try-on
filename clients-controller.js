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
    res.send({ message: "Success" });
    }
;    
// delete client pose by id
// delete client poses
// delete client photo
// delete client name
module.exports = {
    deleteClientById
};