const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter a name']
    },
    photo: {
        type: String,
        required: [true, 'please enter an photo']
    },
    gender: {
        type: String,
        required: [true, 'please enter an gender']
    },

    measurements:{
        height: Number,
        weight: Number,
        chest: Number,
        waist: Number,
        hip: Number,
        inseam: Number,
        sholder: Number
    }
    ,
    poses:[
        {pose_id:Number}
    ]

}, {
    timestamps: true
})


module.exports = mongoose.model('Client', clientSchema)