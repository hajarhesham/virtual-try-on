let posesDB = [
    {
        id:0,
        name:"A",
        theta:[] // array of 24(body joints)*3(xyz)
    }
];

// get theta by id
// get pose name

// add new pose

// delete pose
const deleteClientPoseById = (req,res) =>{
    const poseId = parseInt(req.params.poseId);
    posesDB = posesDB.filter((poses) => poses.id !== poseId);
    res.send({ message: `pose with id:${req.params.poseId} has been deleted successfully` })
}

module.exports = {
    deleteClientPoseById
}
