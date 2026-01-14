import React from "react";
import adminstyles from "./admin.module.css";
import { useState } from "react";
import axios from "axios";
const AddTreatments = () => {
  const API = process.env.REACT_APP_API_URL;
  const TREATMENT_OPTIONS = [
    "General Medicine",
    "General Surgery",
    "Urology",
    "Gynecology",
    "Orthopedics",
    "Gastroenterology",
    "Nephrology",
    "Cardiac",
    "Neurology",
    "Plastic Surgery",
    "Fertility and IVF",
    "Paediatrics",
    "ENT",
    "Critical Care Unit",
    "Oncology",
    "Nutrition & Dietetic",
    "Anesthesiology",
    "Dentistry",
    "Pain Management",
    "Pathology",
    "Chest Medicine",
    "Diabetology"
  ];
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");
  const [services, setServices] = useState("");

  // slug generator
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const slug = generateSlug(tname);
    const serviceArray = services
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
    axios
      .post(`${API}/treatments`, { tname, slug, tdesc, services: serviceArray })
      .then((res) => {
        alert("Treatment Added Successfully");
        setTname("");
        setTdesc("");
        setServices("");
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
            {TREATMENT_OPTIONS.map((treatment) => (
              <option key={treatment} value={treatment}>
                {treatment}
              </option>
            ))}
          </select>

          <textarea
            className="form-control mt-3 mb-3"
            placeholder="Enter services (e.g. ECG, Echo, Angiography)"
            value={services}
            onChange={(e) => setServices(e.target.value)}
          ></textarea>

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