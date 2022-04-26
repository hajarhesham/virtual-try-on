const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter your name']
    },

    photo: {
        data: Buffer,
        contentType: String,
        required: [true, 'enter your photo']
    },

    gender: {
        type: String,
        enum:["male","female"],
        required: [true, 'please enter your gender']
    },

    measurements:{
        height: Number,
        weight: Number,
        chest: Number,
        waist: Number,
        hip: Number,
        inseam: Number,
        sholder: Number
    },

    poses:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Pose'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', clientSchema);
