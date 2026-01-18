import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import adminstyles from "./admin.module.css";
import axios from 'axios';

const EditTreatment = () => {
  const API = process.env.REACT_APP_API_URL;

  const [tname,setTname] = useState("")
  const[tdesc,setTdesc] = useState("");
  const {id} = useParams(); 
  const navigate = useNavigate();
    useEffect(()=>{
      axios.get(`${API}/treatments/${id}`)
      .then((res)=>{
        setTname(res.data.tname);
        setTdesc(res.data.tdesc);
      })
      .catch((err)=>{
        console.log(err)
      })
    },[]);
    const submitHandler = (e) =>{
      e.preventDefault();
      axios.put(`${API}/treatments/${id}`,{tname,tdesc})
      .then((res)=>{
        alert("Treatments Upadted Sucessfully")
        navigate("/admindashboard/updatetreatments")
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div className="container">
          <div className="d-flex justify-content-center">
            <form onSubmit={submitHandler} className={adminstyles.addForm}>
              <h2 className="text-center">Edit Treatment</h2>
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
                <input type="submit" value="Update" className="btn btn-primary mt-3" />
              </div>
            </form>
          </div>
        </div>
  )
}

export default EditTreatment