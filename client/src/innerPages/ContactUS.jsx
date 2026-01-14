import React, { useState } from 'react'
import innerstyles from "./innerpages.module.css";
import axios from 'axios';
import Alert from '@mui/material/Alert';

const ContactUS = () => {
  // API KEY
  const API = process.env.REACT_APP_API_URL;
  // Form State Management
  const [yName, setYName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  // Alert State Management
  const [alertType, setAlertType] = useState("success");
  const [showAlert, setShowAlert] = useState(false);


  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`${API}/contact`, { yName, mobile, email, enquiryType, specialRequest })
      .then((res) => {

        // Alert Send
        setAlertType("success");
        setShowAlert(true);

        // Reset Form
        setYName("");
        setMobile("");
        setEmail("");
        setEnquiryType("");
        setSpecialRequest("");
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
          <div className="col-1 d-sm-none"></div>
          <div className="col-sm-12 col-lg-4">
            <h1>Contact Us</h1>
            <h3>Get In Touch</h3>
            <p>
              Hospital aims to make things easier for you!
              Our aim is to provide our customers with the best medical facilities, constant care, and reliable support.
            </p>
          </div>
          <div className="col-sm-12 col-lg-7">
            <form onSubmit={submitHandler}>
              <h2>We are ready to help you.</h2>
              <p>If you have a query or a suggestion, please fill out the form below, and we will get back to you as early as possible.</p>
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <input type="text" name="yName" value={yName} onChange={(e) => setYName(e.target.value)} placeholder="Your Name" />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <input type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Phone No." />
                </div>
                <div className='col-sm-12 col-lg-6'>
                  <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <select name="enquiryType" value={enquiryType} onChange={(e) => setEnquiryType(e.target.value)}>
                    <option value="">Enquiry Type</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Media/Press">Media/Press</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className='col-12'>
                  <textarea name="specialRequest" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} placeholder='Special Request'></textarea>
                </div>
                <div className='text-center'>
                  <button type="submit">
                    Send
                  </button>
                </div>
              </div>
              {showAlert && (
                <Alert severity={alertType} sx={{ mb: 2 }}>
                  {alertType === "success"
                    ? "Contact Form Successfully Registerd"
                    : "Something went wrong. Please try again"}
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUS