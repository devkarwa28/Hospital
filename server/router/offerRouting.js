let express = require("express");
let Offer = require("../models/offerModel");

let offerRouting =  express.Router();

offerRouting.post("/offer",async (req,res)=>{
    try{
        let offer = new Offer(req.body);
        let result = await offer.save();
        res.send(result);
    }
    catch(err){
        console.log(err)
    }
})
module.exports = offerRouting;