let moongose = require('mongoose')
let appointmentSchema = new moongose.Schema({
    pName:{
        type: String,
        required : true
    },
    gender:{
        type: String,
        required : true
    },
    mobile:{
        type: Number,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    address:{
        type: String,
        required : true
    },
    expa:{
        type: String,
        required : true
    },
    service:{
        type: String,
        required : true
    },
    appointDate:{
        type: Date,
        required : true,
    },
    timeing:{
        type: String,
        required : true
    },
    medicalConcern:{
        type: String,
        required : true
    }
});
module.exports = moongose.model("appointment",appointmentSchema)
