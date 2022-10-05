const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
          ],
    },
    password:{
        type:String,
        required:true,
        minlength:[6, 'Password should contain at least 6 charactors']
    },
    phone: {
        type: Number,
        required: true
    },
    area: {
        type: String
    },
    lane: {
        type: String
    },

},{
    timestamps:true
});

// encrypt user password

userSchema.pre("save", async function (next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// decrypt password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User',userSchema);

module.exports = User