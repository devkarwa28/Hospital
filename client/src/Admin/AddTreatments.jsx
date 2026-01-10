import React from "react";
import adminstyles from "./admin.module.css";
import { useState } from "react";
import axios from "axios";
const AddTreatments = () => {
  const API = process.env.REACT_APP_API_URL;
  
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/treatments`, { tname, tdesc })
      .then((res) => {
        alert("Treatment Added Successfully");
        setTname("")
        setTdesc("")
      })
      .catch((err) => {
        alert("Unable To Add ????");
      });
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <form onSubmit={submitHandler} className={adminstyles.addForm}>
          <h2 className="text-center">Add Treatment</h2>
          <select
            className="form-control mb-3"
            name="tname"
            value={tname}
            onChange={(e) => setTname(e.target.value)}
          >
            <option value="">Select Treatment</option>
            <option value="Consultation">Doctor Consultation</option>
            <option value="ECG">ECG</option>
            <option value="X-Ray">X-Ray</option>
            <option value="MRI">MRI Scan</option>
            <option value="CT Scan">CT Scan</option>
            <option value="Blood Test">Blood Test</option>
            <option value="Physiotherapy">Physiotherapy</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Dialysis">Dialysis</option>
          </select>
          <textarea
            className="form-control"
            type="text"
            value={tdesc}
            name="tdesc"
            onChange={(e) => setTdesc(e.target.value)}
            placeholder="Enter Treatment Descreption"
          ></textarea>
          <div className="d-flex justify-content-end">
            <input type="submit" value="Add" className="btn btn-primary mt-3" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTreatments;