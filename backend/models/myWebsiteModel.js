const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    feedback:{
        type: String
    }
})

const User = new mongoose.model("MyWebsite", UserSchema);
module.exports = User;