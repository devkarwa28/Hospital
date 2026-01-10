import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import adminstyles from "./admin.module.css";

function EditDoctor() {
    const API = process.env.REACT_APP_API_URL;

    const [doctorName, setDoctorName] = useState("");
    const [doctorSpecs, setDoctorSpecs] = useState("");
    const [doctorDepartment, setDoctorDepartment] = useState("");
    const [doctorQualification, setDoctorQualification] = useState("");
    const [doctorExp, setDoctorExp] = useState("");
    const { did } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${API}/doctors/${did}`)
            .then((res) => {
                setDoctorName(res.data.doctorName);
                setDoctorSpecs(res.data.doctorSpecs);
                setDoctorDepartment(res.data.doctorDepartment);
                setDoctorQualification(res.data.doctorQualification);
                setDoctorExp(res.data.doctorExp);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [did]);
    const submitHandler = (event) =>{
        event.preventDefault();
        axios.put(`${API}/doctors/${did}`,{doctorName,doctorSpecs,doctorDepartment,doctorQualification,doctorExp})
        .then((res)=>{
            alert("Doctor's Data Updated Sucessfully")
            navigate("/admindashboard/updatedoctors")
        })
        .catch((err)=>{
            alert("Cannot Update Doctor's Data");
        })
    }
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <form onSubmit={submitHandler} className={adminstyles.addForm}>
                        <h2 className="text-center">Edit Doctors</h2>
                        <input
                            className="form-control mb-3"
                            type="text"
                            value={doctorName}
                            name="doctorName"
                            onChange={(e) => setDoctorName(e.target.value)}
                            placeholder="Enter Doctor's Full Name"
                        />
                        <select
                            className="form-control mb-3"
                            name="doctorSpecs"
                            value={doctorSpecs}
                            onChange={(e) => setDoctorSpecs(e.target.value)}
                        >
                            <option value="">Select Specialization</option>
                            <option value="cardiologist">Cardiologist</option>
                            <option value="neurologist">Neurologist</option>
                            <option value="orthopedic_surgeon">Orthopedic Surgeon</option>
                            <option value="pediatrician">Pediatrician</option>
                            <option value="dermatologist">Dermatologist</option>
                        </select>
                        <select
                            className="form-control mb-3"
                            name="doctorDepartment"
                            value={doctorDepartment}
                            onChange={(e) => setDoctorDepartment(e.target.value)}
                        >
                            <option value="">Select Department</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="orthopedics">Orthopedics</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="dermatology">Dermatology</option>
                        </select>
                        <input
                            className="form-control mb-3"
                            type="text"
                            value={doctorQualification}
                            name="doctorQualification"
                            onChange={(e) => setDoctorQualification(e.target.value)}
                            placeholder="Enter Doctor's Qualification"
                        />
                        <input
                            className="form-control mb-3"
                            type="number"
                            value={doctorExp}
                            name="doctorSpecs"
                            onChange={(e) => setDoctorExp(e.target.value)}
                            placeholder="Enter Doctor's Experince in Years"
                        />
                        <div className="d-flex justify-content-end">
                            <input type="submit" value="Update" className="btn btn-primary mt-3" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditDoctor