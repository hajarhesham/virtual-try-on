const asyncHandler = require('express-async-handler')
const Pose = require('./models/poseModel')

// get all poses
// working
const getPoses = asyncHandler(async (req, res) => {
    const poses = await Pose.find();
    res.status(200).send(poses);
});

// get pose by id
// working
const getPoseById = asyncHandler(async (req, res) => {
    const id = req.params.poseId;
    const pose = await Pose.findById(id);
    if (!pose) {
        res.status(404).send({error: "pose not found"});
    }else {
        res.status(200).send(pose)
    }
});

// get theta by id
// working
const getThetaById = asyncHandler(async (req, res) => {
    const id = req.params.poseId;
    const pose = await Pose.findById(id);
    if (!pose) {
        res.status(404).send({error: "pose not found"});
    }else {
        res.status(200).send(pose.theta)
    }
});

// get pose name
// working
const getNameById = asyncHandler(async (req, res) => {
    const id = req.params.poseId;
    const pose = await Pose.findById(id);
    if (!pose) {
        res.status(404).send({error: "pose not found"});
    }else {
        res.status(200).send(pose.name)
    }
});

// add new pose
// working
const createPoseHandler = asyncHandler(async (req, res) => {
    const body = req.body;
    const response = await Pose.create(body)
    res.send(response);
});

// delete pose
// working
const deleteClientPoseById = asyncHandler(async (req, res) => {
    const poseId = req.params.poseId;
    const pose = await Pose.deleteOne({_id: poseId});
    res.send(pose)
});


module.exports = {
    getPoses,
    getPoseById,
    getNameById, 
    getThetaById,
    createPoseHandler,
    deleteClientPoseById
};

