let express = require('express');
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt');
let Signup = require('../models/signupModel');
const loginMiddleware = require('../Middleware/loginMiddleware');

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
            let payload ={
                user:{
                    id: exist._id
                }
            };
            jwt.sign(payload,"JSON123String",{expiresIn: 3600000000},(err,token)=>{
                if(err) throw err;
                res.send({token});
            });
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
})
signupRouting.get("/admindashboard",loginMiddleware,async (req,res)=>{
    res.send("Admin")
})

module.exports = signupRouting;