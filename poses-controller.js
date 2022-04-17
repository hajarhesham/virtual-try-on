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
const createPoseHandler = (req,res) => {
    const id = posesDB.length + 1;
    posesDB.push({ ...req.body, id });
    res.send({ id, ...req.body });
};

// delete pose
const deleteClientPoseById = (req,res) =>{
    const poseId = parseInt(req.params.poseId);
    posesDB = posesDB.filter((poses) => poses.id !== poseId);
    res.send({ message: `pose with id:${req.params.poseId} has been deleted successfully` })
}


module.exports = {
    getNameById, 
    getThetaById,
    createPoseHandler,
    deleteClientPoseById
};

