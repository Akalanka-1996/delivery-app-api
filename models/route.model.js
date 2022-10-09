const mongoose = require('mongoose')

const routeSchema = mongoose.Schema({
    area:{
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
},{
    timestamps:true
})

const Route = mongoose.model("Route", routeSchema)

module.exports = Route;