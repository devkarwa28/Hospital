let express = require('express');
let Appointment = require("../models/appointmentModel")

const appointmentRouting = express.Router();

appointmentRouting.post("/appointments",async(req,res)=>{
    try{
        let appointment = new Appointment(req.body);
        let result = await appointment.save();
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
});
appointmentRouting.get("/appointments",async(req,res)=>{
    try{
        let appointment = await Appointment.find()
        res.send(appointment)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = appointmentRouting;