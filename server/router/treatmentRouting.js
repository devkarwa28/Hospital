
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
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});

treatmentRouting.get("/treatments",async (req,res)=>{
    try{
        let treatment = await Treatment.find();
        res.send(treatment);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});
treatmentRouting.get("/treatments/:id",async(req,res)=>{
    try{
        let treatment = await Treatment.findOne({_id:req.params.id});
        res.send(treatment);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
})
treatmentRouting.put("/treatments/:id", async (req,res)=>{
    try{
        let treatment = await Treatment.updateOne({_id:req.params.id},{$set : req.body});
        res.send(treatment);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
})
treatmentRouting.delete("/treatments/:id", async (req,res)=>{
    try{
        let treatment = await Treatment.deleteOne({_id:req.params.id});
        res.send(treatment);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
})

module.exports = treatmentRouting;
