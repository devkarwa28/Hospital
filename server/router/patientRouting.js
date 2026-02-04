let express = require('express');
let bcrypt = require('bcrypt');
let PatientSignup =  require('../models/patientModel')

const patientRouting =  express.Router();

patientRouting.post('/patient-signup',async (req,res)=>{
    try{
        let patientSignup = new PatientSignup({
            pname: req.body.pname,
            email : req.body.email,
            mobile: req.body.mobile,
            dob: new Date(req.body.dob),
            gender: req.body.gender,
            password: bcrypt.hashSync(req.body.password,12)
        })
        let result =  await patientSignup.save();
        res.save(result);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Server Error"})
    }
})
module.exports = patientRouting;