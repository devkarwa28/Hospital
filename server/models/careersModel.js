let mongoose = require('mongoose');

let careersSchema = new mongoose.Schema({
    cname:{
        type: String,
        required: true,
    },
    mobile:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    exp:{
        type: Number,
        required: true,
    },
    qual:{
        type: String,
        required:true,
    },
    passingYear:{
        type: Number,
        required: true,
    },
    college:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("careers",careersSchema);