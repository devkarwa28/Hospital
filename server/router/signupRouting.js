let express = require('express');
let Signup = require('../models/signupModel');

let signupRouting = express.Router();

signupRouting.post("/signup",async (req,res)=>{
    try{
        let signup = new Signup(req.body);
        let result = await signup.save();
        res.send(result);
    }
    catch(err){
        console.log(err)
    }
});

signupRouting.post("/login", async (req,res)=>{
    try{
        const {email,password} = req.body;
        let  exist = await Signup.findOne({email:email});
        if(!exist){
            res.send("Username Not Exist");
        }
        else if(exist.password!==password){
            res.send("Invalid Password")
        }
        else{
            res.send("valid");
        }
    }
    catch(err){
        console.log(err);
    }
})

module.exports = signupRouting;