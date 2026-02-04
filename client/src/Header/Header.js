import React from "react";
import { NavLink } from "react-router-dom";
import headerstyles from "./header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <header className={headerstyles.header}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <NavLink className="text-decoration-none text-dark">
                <h2 className="mb-0">Hospital</h2>
              </NavLink>
            </Navbar.Brand>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">

                <ul className="d-lg-flex mb-0">
                  <li>
                    <Nav.Item>
                      <NavLink to="/">Home</NavLink>
                    </Nav.Item>
                  </li>
                 <li>
                     <Nav.Item>
                    <NavLink to="/aboutus">About Us</NavLink>
                  </Nav.Item>
                 </li>
                  <li>
                    <Nav.Item>
                    <NavLink to="/treatments">Treatsments</NavLink>
                  </Nav.Item>
                  </li>
                  <li>
                    <Nav.Item>
                    <NavLink to="/bookappointment">Book Appointment</NavLink>
                  </Nav.Item>
                  </li>
                 <li>
                     <Nav.Item>
                    <NavLink to="/offers">Offers</NavLink>
                  </Nav.Item>
                 </li>
                  <li>
                    <Nav.Item>
                    <NavLink to="/contactus">Contact Us</NavLink>
                  </Nav.Item>
                  </li>
                </ul>
                 <NavLink to='/patient-login'>
                  <button className={headerstyles.login_btn}>
                  Login
                </button>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
