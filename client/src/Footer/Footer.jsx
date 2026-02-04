import React from 'react'
import footerstyles from './footer.module.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={footerstyles.footer}>
        <section className={footerstyles.mainfooter}>
            <div className="container">
                <div className="row">
                <div className="col-6 col-lg-3">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <NavLink>
                            Our Doctors
                        </NavLink>
                    </li>
                     <li>
                        <NavLink>
                            OPD Booking
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/bookappointment">
                            Book An Appointment
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/contactus">
                            Make An Enquiry
                        </NavLink>
                    </li>
                     <li>
                        <NavLink>
                            Insurance
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to='/careers'>
                            Careers
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-6 col-lg-3">
                <h2>Multispeciality</h2>
                
                <ul>
                    <li>
                        <NavLink>
                            General Medicine
                        </NavLink>

                    </li>
                    <li>
                        <NavLink>
                            Gynecology
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink>
                            Urology
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink>
                            Nephrology
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink>
                            Cardiac
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink>
                            Neurology
                        </NavLink>
                        
                    </li>
                </ul>
            </div>
            <div className="col-6 col-lg-3">
                <h2>Patient Care</h2>
                <ul>
                    <li>
                        <NavLink to='/addmission-discharge'>
                            Admission & Discharge
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/vistior-info'>
                            Visitors Information
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/patient-rights'>
                            Patient Rights
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/patient-responsibility'>
                            Patient Responsibility
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/emergency-trauma-care'>
                            Emergency and Trauma Care
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink>
                            Health Packages
                        </NavLink>
                        
                    </li>
                </ul>
            </div>
            <div className="col-lg-3">

            </div>
            </div>
            </div>
        </section>
        <div className="container py-3">
            <div className="row">
                <div className="col-6">
                    <p className="text-center">Designed & Developed By Dev Karwa</p>
                </div>
                <div className="col-6">
                    <p className="text-center">All Rights Reserved &copy; 2025</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer