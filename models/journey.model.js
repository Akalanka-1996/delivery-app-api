const mongoose = require('mongoose')

const journeySchema = mongoose.Schema({
    // date: {
    //     type: Date
    // },
    isStarted: {
        type: Boolean,
        default: false
    },
    route: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Route"
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