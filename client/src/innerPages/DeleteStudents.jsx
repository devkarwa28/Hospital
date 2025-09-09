import React, { useEffect, useState } from 'react';
import innerstyles from './innerpages.module.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const DeleteStudents = () => {
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
    const studentDelete = (sid) =>{
      axios.delete(`http://localhost:4000/student/${sid}`)
      .then((res)=>{
        alert("Student Deleted Successfully")
      })
      .catch((err)=>{
        alert("unable to delete data")
      })
    }
  return (
     <main>
      <section className={innerstyles.breadcrums}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Delete Student Data</h3>
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
                        <td>
                          <Button variant="danger" onClick={()=>studentDelete(stu._id)}>Delete</Button>
                        </td>
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
  )
}

export default DeleteStudents;