import React, { useState } from 'react'
import adminstyles from "./admin.module.css";
import axios from 'axios';

const AddOffers = () => {
  const API = process.env.REACT_APP_API_URL;

  const [oname, setOname] = useState("");
  const [odesc,setOdesc] = useState("");
  const submitHandler  = (e) =>{
    e.preventDefault();
    axios.post(`${API}/offer`,{oname,odesc})
    .then((res)=>{
      alert("Offer Added Successfully")
      setOname("")
      setOdesc("")
    })
    .catch((err)=>{
      alert("Cannot Add Offer")
    })
  }
  return (
    <div className="container">
          <div className="d-flex justify-content-center">
            <form onSubmit={submitHandler}  className={adminstyles.addForm}>
              <h2 className="text-center">Add Offer</h2>
              <input
                className="form-control mb-3"
                type="text"
                value={oname}
                name="oname"
                onChange={(e) => setOname(e.target.value)}
                placeholder="Enter Offer Name"
              />
              <textarea
                className="form-control"
                type="text"
                value={odesc}
                name="odesc"
                onChange={(e) => setOdesc(e.target.value)}
                placeholder="Enter Treatment Descreption"
              ></textarea>
              <div className="d-flex justify-content-end">
                <input type="submit" value="Add Offer" className="btn btn-primary mt-3" />
              </div>
            </form>
          </div>
        </div>
  )
}

export default AddOffers