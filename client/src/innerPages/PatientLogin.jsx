import React from 'react'
import { NavLink } from "react-router-dom";
import innerstyles from "./innerpages.module.css";

const PatientLogin = () => {
  return (
    <section className={innerstyles.patient_login}>
        <div>
            <h1>Patient <span>Login</span></h1>
            <form>
                <input type="text" name='email' placeholder='Enter your Email'  className='d-block'/>
                <input type="text" name="password" placeholder='Password' className='d-block'/>
                <button type='submit'>
                  Login
                </button>
                <div className={innerstyles.or_divider}>
                  <span>OR</span>
                </div>
                <div>
                  <h2>Don't Have an Account ? <NavLink to='/patient-register'>Register</NavLink></h2>
                </div>
            </form>
        </div>
    </section>
  )
}

export default PatientLogin