import React from 'react'
import innerstyles from "./innerpages.module.css";

const EmergencyTrauma = () => {
  return (
    <section className={innerstyles.admission}>
            <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-lg-7">
                        <img src="images/srh-facility.jpg" alt="" />
                    </div>
                    <div className="col-lg-5">
                        <div className={innerstyles.photo_box}>
                            <h1>
                                Emergency and Trauma Care
                            </h1>
                            <h2>
                                Trauma may have a significant physical and emotional impact on the sufferer as well as their friends and family. Shri Ram Hospitals is one of just a few hospitals in Jodhpur, Rajasthan, that provides full Emergency & Trauma Care to patients. Trauma strikes unexpectedly and without warning, giving patients no time to prepare and perhaps forever altering the patient's and their family's lives.
                            </h2>
                            
                            <p className='mt-3'>
                                The 8-bed Emergency facility is equipped with cutting-edge technology for a wide range of patients experiencing acute crises, including initial examination, resuscitation, treatment, investigation, stabilization, monitoring, and disposition.
                            </p>
                            <p>
                                Critically ill or injured patients with life-threatening illnesses are immediately taken under the care of a team of expert emergency doctors in the Emergency & Trauma Care department, and the patient is examined, resuscitated, and stabilised according to procedures.
                            </p>
                            <p>
                              The Emergency Department provides experts in trauma and emergency medicine 24×7.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default EmergencyTrauma