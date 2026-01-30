import React from 'react'
import footerstyles from './footer.module.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={footerstyles.footer}>
        <section>
            <div className="container">
                <div className="row">
                <div className="col-lg-3">
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
                        <NavLink>
                            Book An Appointment
                        </NavLink>
                    </li>
                     <li>
                        <NavLink>
                            Make An Enquiry
                        </NavLink>
                    </li>
                     <li>
                        <NavLink>
                            Insurance
                        </NavLink>
                    </li>
                     <li>
                        <NavLink>
                            Careers
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-lg-3">
                <h2>Multispeciality</h2>
                <ul>
                    
                </ul>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
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