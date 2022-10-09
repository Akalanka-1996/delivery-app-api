const mongoose = require('mongoose')

const journeySchema = mongoose.Schema({
    area:{
        type:String,
    },
    route: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Route"
    },
    isStarted: {
        type: Boolean,
        default: false
    },
    followers: [
        
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},{
    timestamps:true
})

const Journey = mongoose.model("Journey", journeySchema)

module.exports = Journey