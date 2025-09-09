let express = require('express')
let Treatment = require('../models/treatmentModel');

let treatmentRouting = express.Router();

treatmentRouting.post("/treatments",async (req,res)=>{
    try{
        let treatment = new Treatment(req.body);
        let result = await treatment.save();
        res.send(result);
    }
    catch(err){
        console.log(err)
    }
});

treatmentRouting.get("/treatments",async (req,res)=>{
    try{
        let treatment = await Treatment.find();
        res.send(treatment)
    }
    catch(err){
        console.log(err)
    }
});
treatmentRouting.get("/treatments/:tid",async(req,res)=>{
    try{
        let treatment = await Treatment.findOne({_id:req.params.tid});
        res.send(treatment)
    }
    catch(err){
        console.log(err);
    }
})
treatmentRouting.put("/treatments/:tid", async (req,res)=>{
    try{
        let treatment = await Treatment.updateOne({_id:req.params.tid},{$set : req.body})
        res.send(treatment)
    }
    catch(err){
        console.log(err)
    }
})
treatmentRouting.delete("/treatments/:tid", async (req,res)=>{
    try{
        let treatment = await Treatment.deleteOne({_id:req.params.tid})
        res.send(treatment);
    }
    catch(err){
        console.log(err)
    }
})
module.exports = treatmentRouting;
