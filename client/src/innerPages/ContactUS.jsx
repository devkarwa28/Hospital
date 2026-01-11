import React, { useState } from 'react'
import innerstyles from "./innerpages.module.css";
import axios from 'axios';

const ContactUS = () => {
  const API = process.env.REACT_APP_API_URL;
  const [yName,setYName]= useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [enquiryType,setEnquiryType] = useState("");
  const [specialRequest,setSpecialRequest] = useState("");

  const submitHandler = (event) =>{
    event.preventDefault();
    axios.post(`${API}/contact`,{yName,mobile,email,enquiryType,specialRequest})
    .then((res)=>{
      alert("Yours Message Has Beem Sent Successfully !!!")
      setYName("");
      setMobile("");
      setEmail("");
      setEnquiryType("");
      setSpecialRequest("");
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <section className={innerstyles.appointment}>
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-4">
                <h1>Contact Us</h1>
                <h3>Get In Touch</h3>
                <p>
                 Hospital aims to make things easier for you!
Our aim is to provide our customers with the best medical facilities, constant care, and reliable support.
                </p>
              </div>
              <div className="col-7">
                <form onSubmit={submitHandler}>
                  <h2>We are ready to help you.</h2>
                  <p>If you have a query or a suggestion, please fill out the form below, and we will get back to you as early as possible.</p>
                  <div className="row">
                    <div className="col-6">
                      <input type="text" name="yName" value={yName} onChange={(e)=>setYName(e.target.value)} placeholder="Your Name"/>
                    </div>
                    <div className="col-6">
                      <input type="text" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Phone No." />
                    </div>
                    <div className='col-6'>
                      <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address'/>
                    </div>
                    <div className="col-6">
                      <select name="enquiryType" value={enquiryType} onChange={(e)=>setEnquiryType(e.target.value)}>
                        <option value="">Enquiry Type</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Media/Press">Media/Press</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className='col-12'>
                      <textarea name="specialRequest" value={specialRequest} onChange={(e)=>setSpecialRequest(e.target.value)} placeholder='Special Request'></textarea>
                    </div>
                  </div>
                  <button type="submit">
                        Send
                    </button>
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ContactUS