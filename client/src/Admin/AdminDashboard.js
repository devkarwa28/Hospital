import React, { useContext, useEffect, useState } from "react";
import adminstyles from "./admin.module.css";
import AdminSidebar from "./AdminSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { store } from "../App";
import axios from "axios";
const AdminDashboard = () => {
  const API = process.env.REACT_APP_API_URL;
  const [data, setData] = useState("");
  const [token] = useContext(store);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/admindashboard`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (!token) {
      navigate("/admin");
    }
  });
  return (
    <>
      <section className={adminstyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>{data}Admin Dashboard</p>
            </div>
          </div>
        </div>
      </section>
      <main className="d-flex">
        <aside className={adminstyles.sidebar}>
          <AdminSidebar />
        </aside>
        <div className={adminstyles.outlet}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
