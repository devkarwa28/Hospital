import axios from "axios";
import adminstyles from "./admin.module.css";
import React, { useState } from "react";

const AddDoctors = () => {
  const API = process.env.REACT_APP_API_URL;

  const [doctorName, setDoctorName] = useState("");
  const [doctorSpecs, setDoctorSpecs] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [doctorQualification, setDoctorQualification] = useState("");
  const [doctorExp, setDoctorExp] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("doctorName", doctorName);
    formdata.append("doctorSpecs", doctorSpecs);
    formdata.append("doctorQualification", doctorQualification);
    formdata.append("doctorDepartment", doctorDepartment);
    formdata.append("doctorExp", doctorExp);
    formdata.append("image", image);       
    axios
      .post(`${API}/doctors`, formdata,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Doctor Added Successfully");
        setDoctorName("");
        setDoctorSpecs("");
        setDoctorDepartment("");
        setDoctorQualification("");
        setDoctorExp("");
        setImage(null)
      })
      .catch((err) => {
        console.log("Unable To Add Doctor In Server");
      });
  };
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <form onSubmit={submitHandler} className={adminstyles.addForm}>
            <h2 className="text-center">Add Doctors</h2>
            <input
              className="form-control mb-3"
              type="text"
              value={doctorName}
              name="doctorName"
              onChange={(e) => setDoctorName(e.target.value)}
              placeholder="Enter Doctor's Full Name"
            />
            <select
              className="form-control mb-3"
              name="doctorSpecs"
              value={doctorSpecs}
              onChange={(e) => setDoctorSpecs(e.target.value)}
            >
              <option value="">Select Specialization</option>
              <option value="cardiologist">Cardiologist</option>
              <option value="neurologist">Neurologist</option>
              <option value="orthopedic_surgeon">Orthopedic Surgeon</option>
              <option value="pediatrician">Pediatrician</option>
              <option value="dermatologist">Dermatologist</option>
            </select>
            <select
              className="form-control mb-3"
              name="doctorDepartment"
              value={doctorDepartment}
              onChange={(e) => setDoctorDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="dermatology">Dermatology</option>
            </select>
            <input
              className="form-control mb-3"
              type="text"
              value={doctorQualification}
              name="doctorQualification"
              onChange={(e) => setDoctorQualification(e.target.value)}
              placeholder="Enter Doctor's Qualification"
            />
            <input
              className="form-control mb-3"
              type="number"
              value={doctorExp}
              name="doctorSpecs"
              onChange={(e) => setDoctorExp(e.target.value)}
              placeholder="Enter Doctor's Experince in Years"
            />

            <input type="file" accept="image/*" required name="image" onChange={(e) => setImage(e.target.files[0])} />
            <div className="d-flex justify-content-end">
              <input
                type="submit"
                value="Add"
                className="btn btn-primary mt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctors;
