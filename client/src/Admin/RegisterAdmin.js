import React, { useState } from "react";
import axios from 'axios';
import adminstyles from './admin.module.css';
import { useNavigate } from 'react-router-dom';

const RegisterAdmin = () => {
  const [email, setEmail] = useState("");
  const[name,setName] = useState("");
  const[address,setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const resetLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setAddress("");
    setName("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/signup",{name,email,password,address})
    .then((res)=>{
      alert("Admin Registered Successfully")
      navigate("/admin")
    })
    .catch((err)=>{
      alert("Unable to register")
    })
  };
  return (
    <>
      <main>
        <section className={adminstyles.bread}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Admin Register</p>
              </div>
            </div>
          </div>
        </section>
        <section className={adminstyles.loginform}>
          <div className="container">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-5">
                <form onSubmit={submitHandler}>
                  <h1 className="text-center mb-3">Admin SignUp</h1>
                  <input
                    className="form-control mb-3"
                    type="text"
                    value={name}
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="form-control mb-3"
                    type="email"
                    value={email}
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="form-control mb-3"
                    type="text"
                    value={address}
                    name="address"
                    placeholder="Enter Your Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="my-3">
                    <input
                      type="button"
                      onClick={resetLogin}
                      className="btn btn-danger me-3"
                      value="Reset"
                    />
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegisterAdmin;
