
const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    role:{
        type:String , default:"regular"
    },
    date_created:{
        type:Date, default:Date.now()
    
    }
});

exports.UserModel = mongoose.model("users",userSchema);