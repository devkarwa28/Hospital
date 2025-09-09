import React, { useEffect, useState } from 'react'
import innerstyles from './innerpages.module.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const ShowStudents = () => {
  const [student,setStudent] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/student')
    .then((res)=>{
      setStudent(res.data)
    })
    .catch(()=>{
      alert("Unable To Fetch Student Data")
    })
  })
  return (
    <>
    <main>
      <section className={innerstyles.breadcrums}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Student Data</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
        <div className="row">
          <div className="col-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Mobile No.</th>
                </tr>
              </thead>
              <tbody>
                {
                  student.map((stu)=>{
                    return(
                      <tr>
                        <td>{stu.name}</td>
                        <td>{stu.email}</td>
                        <td>{stu.address}</td>
                        <td>{stu.mobile}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default ShowStudents