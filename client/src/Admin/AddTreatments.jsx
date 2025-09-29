import React from "react";
import adminstyles from "./admin.module.css";
import { useState } from "react";
import axios from "axios";
const AddTreatments = () => {
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/treatments", { tname, tdesc })
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
          <input
            className="form-control mb-3"
            type="text"
            value={tname}
            name="tname"
            onChange={(e) => setTname(e.target.value)}
            placeholder="Enter Treatment Name"
          />
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
