import React, { useState } from "react";
import innerstyles from "./innerpages.module.css";
import axios from "axios";

const Careers = () => {
  // API KEY
  const API = process.env.REACT_APP_API_URL;

  const [cname, setCname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [department, setDepartment] = useState("");
  const [exp, setExp] = useState("");
  const [qual, setQual] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [college, setCollege] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) =>{
    e.preventDefault();
    axios.post(`${API}/careers`,{cname,mobile,email,dob,department,exp,qual,passingYear,college,location,message})
    .then((res)=>{
      alert("Your Application Have Been Submitted Sucessfully");
    })
    .catch((err)=>{
      alert("Cannot Submit Your Application");
    })
  }
  return (
    <section className={innerstyles.careers}>
      <div className="container">
        <h1>COME BUILD A BRIGHT FUTURE</h1>
        <h2>Let your ambition scale new heights.</h2>
        
        <form onSubmit={submitHandler}>
          <h3>Join us to make the world a healthier place</h3>
          <h4>
            Be the first one to learn about new job opportunities that might be
            a perfect fit for you.
          </h4>
          <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                name="cname"
                placeholder="Your Name"
                value={cname}
                onChange={(e) => setCname(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <input
                type="email"
                name="email"
                placeholder="Your E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <input
                type="date"
                name="dob"
                placeholder="Date Of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <select
                name="department"
                required
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Choose Department</option>

                <option value="clinical">Clinical</option>
                <option value="ot">OT</option>
                <option value="icu_nicu">ICU & NICU</option>
                <option value="nursing">Nursing</option>
                <option value="microbiology">Microbiology</option>
                <option value="lab">Lab</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="human_resource">Human Resource</option>
                <option value="accounts_insurance">Accounts & Insurance</option>
                <option value="marketing_sales">Marketing & Sales</option>
                <option value="pr_media">PR & Media</option>
                <option value="it">IT</option>
                <option value="front_desk">Front Desk & Reception</option>
                <option value="opd">OPD</option>
              </select>
            </div>

            <div className="col-lg-6">
              <input
                type="number"
                name="exp"
                placeholder="Year of Experience"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
              />
            </div>

            <div className="col-lg-6">
              <input
                type="text"
                name="qual"
                placeholder="Education Qualification (latest)"
                value={qual}
                onChange={(e) => setQual(e.target.value)}
              />
            </div>

            <div className="col-lg-6">
              <input
                type="text"
                name="passingYear"
                placeholder="Year of Passing"
                value={passingYear}
                onChange={(e) => setPassingYear(e.target.value)}
              />
            </div>

            <div className="col-lg-6">
              <input
                type="text"
                name="college"
                placeholder="College / University"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>

            <div className="col-lg-6">
              <select
                name="location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Choose Hospital Location</option>
                <option value="jodhpur">Jodhpur</option>
                <option value="jaipur">Jaipur</option>
              </select>
            </div>
            <div className="col-lg-12">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="col-lg-12 text-center">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Careers;
