const mongoose = require('mongoose')

const routeSchema = mongoose.Schema({
    title:{
        type:String,
    },
    startPoint: {
        type: String
    },
    startTime: {
        type: Number
    },
    lanes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lane"
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company"
    },
    isStarted: {
        type: Boolean,
        default: false
    },
    vehilceType: {
        type: String,
        
    },
    vehicleNumber: {
        type: String
    },
    followers: [
        
    ],
},{
    timestamps:true
})

const Route = mongoose.model("Route", routeSchema)

module.exports = Route;