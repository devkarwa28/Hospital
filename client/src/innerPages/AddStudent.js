import React, { useState } from 'react'
import axios from 'axios'
import innerstyles from './innerpages.module.css';

const AddStudent = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [mobile,setMobile] = useState("");

  const studentHandler = (e)=>{
    e.preventDefault()
    axios.post(`http://localhost:4000/student`,{name,email,address,mobile})
    .then(()=>{
      alert("Student Added Successfully")
    })
    .catch(err=>{
      alert("Unable To Add Student");
    })
  }
  return (
    <main>
        <section className={innerstyles.breadcrums}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="text-center">Add Students</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="row">
            <div className="col-4">

            </div>
            <div className="col-4">
              <form action="" className={innerstyles.boxsd} onSubmit={studentHandler}>
                <p className="text-center">Enter Student Details</p>
                <div>
                  <input className="form-control mb-4" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter Student Name' />
                </div>
                <div>
                  <input className="form-control mb-4" type="text" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Student Email'/>
                </div>
                <div>
                  <input className="form-control mb-4" type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Student Address'/>
                </div>
                <div>
                  <input className="form-control mb-4" type="text" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter Student Mobile No.'/>
                </div>
                <div>
                  <input className="btn btn-primary" type="submit"/>
                </div>
              </form>
            </div>
          </div>
        </section>
    </main>
  )
}

export default AddStudent;