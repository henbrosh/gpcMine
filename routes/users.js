const express = require("express");

const {UserModel} = require("../models/userModel")
const router = express.Router();



router.get("/", async(req,res)=>
{
    let data = await UserModel.find({});
    res.json(data);

})
module.exports = router;