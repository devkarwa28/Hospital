import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import innerstyles from './innerpages.module.css';

const StudentEdit = () => {
    const [student, setStudent] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const { sid } = useParams();
    const navigate = useNavigate();
    useEffect(() => {

        axios.get(`http://localhost:4000/student/${sid}`)
            .then((res) => {
                setName(res.data.name);
                setEmail(res.data.email);
                setAddress(res.data.address);
                setMobile(res.data.mobile);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);
    const updateHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:4000/student/${sid}`,{name,email,address,mobile})
        .then(()=>{
            alert("Student Data Updated Successfully");
            navigate('/updatestudent')
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    return (
        <>
            <main>
                <section className={innerstyles.breadcrums}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-center">Edit Student Data</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <form onSubmit={updateHandler} className={innerstyles.boxsd}>
                                    <p className="text-center">Edit Student Details</p>
                                    <div>
                                        <input className="form-control mb-4" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Student Name' />
                                    </div>
                                    <div>
                                        <input className="form-control mb-4" type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Student Email' />
                                    </div>
                                    <div>
                                        <input className="form-control mb-4" type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter Student Address' />
                                    </div>
                                    <div>
                                        <input className="form-control mb-4" type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Enter Student Mobile No.' />
                                    </div>
                                    <div>
                                        <input className="btn btn-primary" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default StudentEdit