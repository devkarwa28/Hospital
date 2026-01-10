import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

const UpdateTreatments = () => {
  const API = process.env.REACT_APP_API_URL;
  const [treatment,setTreatment] = useState([]);
  useEffect(()=>{
    axios.get(`${API}/treatments`)
    .then((res)=>{
      setTreatment(res.data)
    })
    .catch((err)=>{
      alert("Cannot Load Treatment Data")
    })
  })
  const deleteHandler = (tid) =>{
    axios.delete(`${API}/treatments/${tid}`)
    .then((res)=>{
      alert("Treatment Deleted Sucessfully");
    })
    .catch((err)=>{
      alert("Unable To Delete the Treatment ???");
    })
  }
  return (
    <div className='container'>
      <div className='w-100'>
         <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Treatment Name</th>
                  <th>Treatment Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  treatment.map((treat)=>{
                    return(
                      <tr>
                        <td>{treat.tname}</td>
                        <td>{treat.tdesc}</td>
                        <td>
                          <NavLink to={`/admindashboard/edit_treatment/${treat._id}`}>
                            <button className='btn btn-primary'>Edit</button>
                          </NavLink>
                          <button className='btn btn-danger ms-2' onClick={()=>deleteHandler(treat._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
      </div>
    </div>
  )
}

export default UpdateTreatments;