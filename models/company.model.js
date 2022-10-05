const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    category: {
        type: String,
        enum: ['veg', 'bake', 'milk','ice']
    }
    ,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},{
    timestamps:true
})

const Company = mongoose.model("RequCompanyest", companySchema)

module.exports = Company;