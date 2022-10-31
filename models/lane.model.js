const mongoose = require('mongoose')

const laneSchema = mongoose.Schema({
    lane: {
        type: String
    },
    
    estimatedTime: {
        type: Number
    },
    hour: {
        type: Number
    },
    min: {
        type: Number
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    routeId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Route"
    }
},{
    timestamps:true
})

const Lane = mongoose.model("Lane", laneSchema)

module.exports = Lane;