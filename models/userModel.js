const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add the username"]
    },
    email:{
        type:String,
        required:[true,"please add the user email address"],
        unique:[true,"this email already exists"]
    },
    password:{
        type:String,
        required:[true,"please add the user password"]
    },
    },{
        timestamps:true,
    
});
module.exports = mongoose.model("User",userSchema)