import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table'

const ShowAppointments = () => {
  const API = process.env.REACT_APP_API_URL;
  const [appointment,setAppointment] = useState([]);
  useEffect(()=>{
    axios.get(`${API}/appointments`)
    .then((res)=>{
      setAppointment(res.data)
    })
  })
  return (
     <div className='container'>
      <div className='w-100'>
         <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Existing Patient</th>
                  <th>Service</th>
                  <th>Appointment Date</th>
                  <th>Timing</th>
                  <th>Medical Concern</th>
                </tr>
              </thead>
              <tbody>
                {
                  appointment.map((appoint)=>{
                    return(
                      <tr>
                        <td>{appoint.pName}</td>
                        <td>{appoint.gender}</td>
                        <td>{appoint.mobile}</td>
                        <td>{appoint.email}</td>
                        <td>{appoint.address}</td>
                        <td>{appoint.expa}</td>
                        <td>{appoint.service}</td>
                        <td>
                          {new Date(appoint.appointDate).toLocaleDateString("en-GB")}
                        </td>
                        <td>{appoint.timeing}</td>
                        <td>{appoint.medicalConcern}</td>
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

export default ShowAppointments