import { useState } from "react";
import innerstyles from "./innerpages.module.css";
import axios from 'axios';

const PatientRegister = () => {
    const API = process.env.REACT_APP_API_URL;

    const [pname,setPname] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [dob,setDob] = useState("");
    const [gender,setGender] = useState("");
    const [password,setPassword] = useState("");
    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post(`${API}/patient-signup`,{pname,email,mobile,dob,gender,password})
        .then((res)=>{
            alert("Patient Registerd Successfully")
        })
        .catch((err)=>{
            alert("Could Not Register Patient........!!!!")
        })
    } 
    return (
        <section className={innerstyles.patient_login}>
            <div>
                <h1>Patient <span>Registeration</span></h1>
                <form onSubmit={submitHandler}>
                    <input type="text" name='pname' value={pname} onChange={(e)=>setPname(e.target.value)} placeholder='Your Name' className='d-block' />
                    <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' className='d-block' />
                    <input type="text" name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Your Mobile' className='d-block' />
                    <select name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                    </select>
                    <input type="date" name="dob" value={dob} onChange={(e)=>setDob(e.target.value)}  />
                    <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter New Password"  />
                    <button type='submit'>
                        Register
                    </button>

                </form>
            </div>
        </section>
    )
}

export default PatientRegister