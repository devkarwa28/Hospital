let mongoose = require("mongoose");

let doctorSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: true,
  },
  doctorSpecs: {
    type: String,
    required: true,
  },
  doctorDepartment: {
    type: String,
    required: true,
  },
  doctorQualification: {
    type: String,
    required: true,
  },
  doctorExp: {
    type: Number,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  catname: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("doctor", doctorSchema);
