const express = require("express");
const { compile } = require("joi");
const {mhModel,valideMh} = require("../models/mhModel")
const router = express.Router();


router.get("/", async(req,res)=>
{
    let data = await mhModel.find({});
    res.json(data);

})

router.post("/", async(req,res)=>
{
    let validBody = valideMh(req.body);
 
    let mh = new mhModel(req.body);
    await mh.save();
    res.json(mh);

}) 

router.delete("/:idDel" , async(req,res)=>{
try{
    let data = await mhModel.deleteOne({_id:req.params.idDel});
    res.json(data);
}catch(err){
    comsole.log(err);

}
}
)
router.put("/:idEdit" , async(req,res)=>{
    try{
        let data = await mhModel.updateOne({_id:req.params.idEdit},req.body);
        res.json(data);
    }catch(err){
        comsole.log(err);
    
    }  
    }
    )

module.exports = router;

