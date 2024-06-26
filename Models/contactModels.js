const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "Please Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"]
    },
    phone: {
        type: String,
        required: [true, "Please Enter Your Phone Number"]
    }
},
{
    timestamps: true
}
)       

module.exports = mongoose.model("Contact", contactSchema)