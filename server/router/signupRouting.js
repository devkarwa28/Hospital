let express = require('express');
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt');
let Signup = require('../models/signupModel');

let signupRouting = express.Router();

signupRouting.post("/signup",async (req,res)=>{
    try{
        let signup = new Signup({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: bcrypt.hashSync(req.body.password, 10),
        });
        let result = await signup.save();
        res.send(result);
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error" });
    }
});
signupRouting.get("/signup",async (req,res)=>{
    try{
        let signup = await Signup.find();
        res.send(signup);
    }
    catch(err){
        console.log(err)
    }
})
signupRouting.post("/login", async (req,res)=>{
    try{
        const {email,password} = req.body;
        let  exist = await Signup.findOne({email:email});
        if(!exist){
            res.send("Username Not Exist");
        }
        else if(!bcrypt.compareSync(password, exist.password)){
            res.send("Invalid Password")
        }
        else{
            res.send("valid");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
})

module.exports = signupRouting;