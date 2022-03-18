let posesDB = [
    {
        id:0,
        name:"A",
        theta:[0] // array of 24(body joints)*3(xyz)
    }
];

// get theta by id
const getThetaById = (req,res) => {
    const poseId = parseInt(req.params.poseId);
    const pose = posesDB.find((pose) => pose.id === poseId);
    if (pose) {
        res.send(pose.theta);
    } else {
        res.status(404).send({error: "pose Not Found" });
    }
};

// get pose name
const getNameById = (req,res) => {
    const poseId = parseInt(req.params.poseId);
    const pose = posesDB.find((pose) => pose.id === poseId);
    if (pose) {
        res.send(pose.name);
    } else {
        res.status(404).send({error: "pose Not Found" });
    }
};

// add new pose

// delete pose

module.exports = {
    getNameById, 
    getThetaById,
};
