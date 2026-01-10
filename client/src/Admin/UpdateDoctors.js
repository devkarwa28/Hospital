import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

const UpdateDoctors = () => {
  const API = process.env.REACT_APP_API_URL;
  const [doctor,setDoctor] = useState([])

  useEffect(()=>{
    axios.get(`${API}/doctors`)
    .then((res)=>{
      setDoctor(res.data)
    })
    .catch((err)=>{
      alert("Cannot Fetch Doctor's Data")
    })
  })
  const deleteHandler = (id) =>{
    axios.delete(`${API}/doctors/${id}`)
    .then((res)=>{
      alert("Successfully Deleted Doctor's Record")
    })
    .catch((err)=>{
      alert("Cannot Delete Doctor's Record")
    })
  }
  return (
    <div className='container'>
      <div className='w-100'>
         <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Doctor Name</th>
                  <th>Doctor's Specilization</th>
                  <th>Doctor's Department</th>
                  <th>Doctor's Qualification</th>
                  <th>Doctor's Experience</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  doctor.map((doc)=>{
                    return(
                      <tr>
                        <td>{doc.doctorName}</td>
                        <td>{doc.doctorSpecs}</td>
                        <td>{doc.doctorDepartment}</td>
                        <td>{doc.doctorQualification}</td>
                        <td>{doc.doctorExp}</td>
                        <td>
                          <NavLink to={`/admindashboard/edit_doctor/${doc._id}`}>
                            <button className='btn btn-primary'>Edit</button>
                          </NavLink>
                          <button className='btn btn-danger ms-2' onClick={()=>deleteHandler(doc._id)}>
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

export default UpdateDoctors