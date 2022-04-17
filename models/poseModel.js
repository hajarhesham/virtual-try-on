const mongoose = require('mongoose');

const poseSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter pose name']
    },
    theta: {
        type: [mongoose.SchemaTypes.Decimal128], // 24(joint) * 3(xyz) = 72
        required: [true, 'please enter theta coef'],
        validate: [val => val.length != 72 , '']
    }
});

module.exports = mongoose.model('PoseModel', poseSchema);
