let express = require('express');
let Doctor = require('../models/doctorModel');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("../config/cloudinary")
let multer = require('multer');
const doctorRouting = express.Router();

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "hospital/doctors",
        allowed_formats: ["jpg","png","jpeg","webp"]
    },
});
const upload = multer({ storage: storage })

doctorRouting.post("/doctors", upload.single("image"),async(req, res) =>{
    try{
        const {path, filename} = req.file;
        let doctor = new Doctor({...req.body, path, filename});
        let result = await doctor.save();
        res.send(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error" });
    }
})
doctorRouting.get("/doctors",async(req,res)=>{
    try{
        let doctor = await Doctor.find()
        res.send(doctor)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error" });
    }
});
doctorRouting.get("/doctors/:id",async(req,res)=>{
    try{
        let doctor = await Doctor.findOne({_id:req.params.id});
        res.send(doctor);
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error" });
    }
});
doctorRouting.put("/doctors/:id",async(req,res)=>{
    try{
        let doctor = await Doctor.updateOne({_id:req.params.id},{$set:req.body})
        res.send(doctor)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error" });
    }
})
doctorRouting.delete("/doctors/:id",async(req,res)=>{
    try{
        let doctor = await Doctor.deleteOne({_id:req.params.id});
        res.send(doctor)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Server error" });
    }
})
module.exports = doctorRouting;