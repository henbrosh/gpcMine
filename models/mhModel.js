const mongoose = require("mongoose");
const Joi = require("joi");

const mhSchema = new mongoose.Schema({
    name_rig:String,
    mhs:String
});

const mhModel = mongoose.model("monitering_pools",mhSchema);

exports.mhModel = mhModel;


exports.valideMh  = (_bodyData) =>{
    let joiCchema = Joi.object({
        name_rig:Joi.string().required(),
        mhs:Joi.string().required()
    })

    return joiCchema.validate(_bodyData);
}