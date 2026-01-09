import React from "react";
import {NavLink} from 'react-router-dom'; 
import headerstyles from './header.module.css';  

const Header = () => {
  return (
    <>
      <header className={headerstyles.header}>
        <nav className="px-5 d-flex justify-content-between py-2">
            <div>
                <NavLink className="text-decoration-none text-dark">
                    <h2 className="mb-0">Hospital</h2>
                </NavLink>
            </div>
            <div>
                <ul className="d-flex mb-0">
                    <li>
                        <NavLink to='/' >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/aboutus' >
                            About Us
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/treatments'>
                            Treatsments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/bookappointment'>
                            Book Appointment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/offers'>
                          Offers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/deletestudents'>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
