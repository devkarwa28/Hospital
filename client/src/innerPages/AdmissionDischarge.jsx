import React from 'react'
import innerstyles from "./innerpages.module.css";

const AdmissionDischarge = () => {
  return (
    <section className={innerstyles.admission}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <img src="images/srh-admission.jpg" alt="" />
                </div>
                <div className="col-lg-5">
                    <div className={innerstyles.photo_box}>
                        <h1>
                            Our Hospital Admission & Discharge
                        </h1>
                        <h2>
                            Our Hospitals ensures that patients and families have hassle-free hospital experience. Customer care is provided at every touchpoint, right from the admission to discharge.
                        </h2>
                        <h3>REGISTRATION PROCESS:</h3>
                        <p>
                            For initiating any medical treatment with an OPD or Indoor procedures, a “Onetime” Registration is required with payment as per patient is registered for the treatment at the Reception which will be valid for 1-2 Days.
                        </p>
                        <p>
                            It is vital for the patient to carry his/ her registration document/card and show it at the reception for further proceedings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdmissionDischarge