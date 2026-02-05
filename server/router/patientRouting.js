let express = require('express');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
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
        res.send(result);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Server Error"})
    }
});
patientRouting.post('/patient-login',(req,res)=>{
    try{
        const {email,password} = req.body;
        let exist = PatientSignup.findOne({email : email});
        if(!exist){
            res.send("User Not Exist")
        }
        else if(!bcrypt.compareSync(password, exist.password))
        {
            res.send("Invalid Password")
        }
        else{
            let payload = {
                users :{
                    id: exist._id
                }
            }
            jwt.sign(payload,"JSON123String",{expiresIn: 350000},(err,token)=>{
                if(err) throw err;
                res.send({token})

            })
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Server Error"})
    }
})
module.exports = patientRouting;