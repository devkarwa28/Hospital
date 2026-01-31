let express = require('express');
let Careers = require('../models/careersModel')

const careersRouting = express.Router();

careersRouting.post("/careers",async (req,res)=>{
    try{
        let careers = new Careers(req.body);
        let result = await careers.save();
        res.send(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});
module.exports = careersRouting;