let mongoose = require('mongoose');
let patientSchema = new mongoose.Schema({
    pname : {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    mobile:{
        type: String,
        required: true,
        unique: true,
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female", "other"],
    },
    dob:{
        type: Date,
        required: true,
    },
    role:{
        type: String,
        default: "Patient"
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
},{timestamps: true});

module.exports = mongoose.model("Patient",patientSchema);