import React from 'react'
import innerstyles from "./innerpages.module.css";

const BookAppointment = () => {
    return (
        <section className={innerstyles.appointment}>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-3">
                        <h1>
                            24 Hour
                            Emergency
                        </h1>
                        <h3>ASSITANCE</h3>
                        <p>Our 24-hour Emergency Department is well equipped to handle all types of emergencies including injuries, trauma, burns, accident etc.</p>
                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-7">
                        <form>
                            <h2>Book An Appointment</h2>
                            <h4>Personal Information</h4>
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" name='pName' placeholder='Patient Name' />
                                </div>
                                <div className="col-6">
                                    <select name="" id="">
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Transgender">Transgender</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <input type="text" name='pMobile' placeholder='Mobile No.' />
                                </div>
                                <div className="col-6">
                                    <input type="text" name='pEmail' placeholder='Email Address' />
                                </div>
                                <div className="col-6">
                                    <input type="text" name='pAddress' placeholder='Address' />
                                </div>
                                <div className="col-6">
                                    <select name="" id="">
                                        <option value="">You are a Existing Patient</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                            <h4 className='mt-3'>Appointment Details</h4>
                            <div className="row">
                                <div className="col-6">
                                    <select name="service" id="">
                                        <option value="">Select Service</option>
                                        <option value="general_medicine">General Medicine</option>
                                        <option value="general_surgery">General Surgery</option>
                                        <option value="gynecology">Gynecology</option>
                                        <option value="urology">Urology</option>
                                        <option value="orthopedics">Orthopedics</option>
                                        <option value="gastroenterology">Gastroenterology</option>
                                        <option value="nephrology">Nephrology</option>
                                        <option value="cardiac">Cardiac</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="plastic_surgery">Plastic Surgery</option>
                                        <option value="fertility_ivf">Fertility and IVF</option>
                                        <option value="paediatrics">Paediatrics</option>
                                        <option value="ent">ENT</option>
                                        <option value="dentistry">Dentistry</option>
                                        <option value="pain_management">Pain Management</option>
                                        <option value="chest_medicine">Chest Medicine</option>
                                        <option value="diabetology">Diabetology</option>
                                        <option value="anesthesiology">Anesthesiology</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <input type="date" name="appointDate" id="" placeholder='Date' />
                                </div>
                                <div className="col-3">
                                    <select name="timing" id="">
                                        <option value="">Time</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Afternoon">Afternoon</option>
                                        <option value="Evening">Evening</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea name="" id="" placeholder='Medical Concern'></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookAppointment