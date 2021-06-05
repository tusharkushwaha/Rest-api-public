const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    id:{
        type:String
    },
    name: {
        type: String,
        required: [true, "Please enter a username"]
    },
    username:{
        type: String
    },
    email:{

    },
    phone:{
        type: String
    },
    website:{
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    userId: {
        type: String
    }

})

const User = new mongoose.model("GetDataUser", Schema);
module.exports = User;














