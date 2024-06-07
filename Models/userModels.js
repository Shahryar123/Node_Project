const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Please Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)