import React, { useContext, useState } from "react";
import adminstyles from "./admin.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { store } from "../App";
const Admin = () => {
  const API = process.env.REACT_APP_API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(store) 
  const navigate = useNavigate();
  const resetLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${API}/login`,{email,password})
    .then((res)=>{
      setToken(res.data.token)
    })
  };
  if(token)
  {
    navigate("/admindashboard")
  }
  return (
    <>
      <main>
        <section className={adminstyles.bread}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Admin Panel</p>
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
                  <h1 className="text-center mb-3">Admin Login</h1>
                  <input
                    className="form-control mb-3"
                    type="email"
                    value={email}
                    name="email"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
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
                      value="Login"
                    />
                  </div>
                  <div className="text-end">
                    <NavLink to="/registeradmin">Register For New User</NavLink>
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

export default Admin;
