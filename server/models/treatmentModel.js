let mongoose = require('mongoose');

let treatmentSchema = new mongoose.Schema({
    tname:{
        type: String,
        required: true
    },
    slug: {
    type: String,
    required: true,
    unique: true  
  },
    tdesc:{
        type: String,
        required: true
    },
    services: {
    type: [String], // array of services
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  }
},{ timestamps: true });

module.exports = mongoose.model("treatment",treatmentSchema);