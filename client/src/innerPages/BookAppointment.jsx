import React, { useState } from "react";
import innerstyles from "./innerpages.module.css";
import axios from "axios";
import Alert from '@mui/material/Alert';

const BookAppointment = () => {
  // API KEY
  const API = process.env.REACT_APP_API_URL;

  // Form State Management
  const [data,setData] = useState({
    pName: "",
    gender: "",
    mobile:"",
    email:"",
    address:"",
    expa:"",
    service:"",
    appointDate:"",
    timeing:"",
    medicalConcern:"",
  })
  const changeHandler = (e) =>{
    setData({...data,[e.target.name]: e.target.value})
  }
  // Alert State Management 
  const [alertType, setAlertType] = useState("success");
  const [showAlert, setShowAlert] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`${API}/appointments`, data)
      .then((res) => {
        setAlertType("success");
      setShowAlert(true);
      setData({
         pName: "",
    gender: "",
    mobile:"",
    email:"",
    address:"",
    expa:"",
    service:"",
    appointDate:"",
    timeing:"",
    medicalConcern:"",
      })
        setTimeout(() => setShowAlert(false), 5000);
      })
      .catch((err) => {
        setAlertType("error");
        setShowAlert(true);
      })
  }
  return (

    <section className={innerstyles.appointment}>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-12 col-lg-3">
            <h1>24 Hour Emergency</h1>
            <h3>ASSITANCE</h3>
            <p>
              Our 24-hour Emergency Department is well equipped to handle all
              types of emergencies including injuries, trauma, burns, accident
              etc.
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-sm-12 col-lg-7">
            <form onSubmit={submitHandler}>
              <h2>Book An Appointment</h2>
              <h4>Personal Information</h4>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <input
                    type="text"
                    value={data.pName}
                    onChange={changeHandler}
                    name="pName"
                    placeholder="Patient Name"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <select name="gender" value={data.gender} onChange={changeHandler}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6">
                  <input type="text" name="mobile" value={data.mobile} onChange={changeHandler} placeholder="Mobile No." />
                </div>
                <div className="col-12 col-lg-6">
                  <input type="text" name="email" value={data.email} onChange={changeHandler} placeholder="Email Address" />
                </div>
                <div className="col-12 col-lg-6">
                  <input type="text" name="address" value={data.address} onChange={changeHandler} placeholder="Address" />
                </div>
                <div className="col-12 col-lg-6">
                  <select name="expa" value={data.expa} onChange={changeHandler}>
                    <option value="">You are a Existing Patient</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <h4 className="mt-3">Appointment Details</h4>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <select name="service" value={data.service} onChange={changeHandler}>
                    <option value="">Select Service</option>
                    <option value="general_medicine">General Medicine</option>
                    <option value="general_surgery">General Surgery</option>
                    <option value="gynecology">Gynecology</option>
                    <option value="urology">Urology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="gastroenterology">Gastroenterology</option>
                    <option value="nephrology">Nephrology</option>
                    <option value="cardiac">Cardiac</option>
                    <option value="neurology">Neurology</option>
                    <option value="plastic_surgery">Plastic Surgery</option>
                    <option value="fertility_ivf">Fertility and IVF</option>
                    <option value="paediatrics">Paediatrics</option>
                    <option value="ent">ENT</option>
                    <option value="dentistry">Dentistry</option>
                    <option value="pain_management">Pain Management</option>
                    <option value="chest_medicine">Chest Medicine</option>
                    <option value="diabetology">Diabetology</option>
                    <option value="anesthesiology">Anesthesiology</option>
                  </select>
                </div>
                <div className="col-6 col-lg-3">
                  <input
                    type="date"
                    name="appointDate"
                    value={data.appointDate}
                   onChange={changeHandler}
                  />
                </div>
                <div className="col-6 col-lg-3">
                  <select name="timing" value={data.timeing} onChange={changeHandler}>
                    <option value="">Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    name="medicalConcern"
                    value={data.medicalConcern}
                    onChange={changeHandler}
                    placeholder="Medical Concern"
                  ></textarea>
                </div>
                <button type="submit" className="mb-3">
                  Book Appointment
                </button>
              </div>
              {showAlert && (
        <Alert severity={alertType} sx={{ mb: 2 }}>
          {alertType === "success"
            ? "Appointment booked successfully"
            : "Something went wrong. Please try again"}
        </Alert>
      )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
