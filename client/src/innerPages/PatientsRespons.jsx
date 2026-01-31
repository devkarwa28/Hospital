import React from 'react'
import innerstyles from "./innerpages.module.css";


const PatientsRespons = () => {
  return (
    <section className={innerstyles.rights}>
          <div className="container">
            <h1>Patient & Attendant <span>Responsibilities</span></h1>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>Patient should provide complete and accurate information about your personal details</li>
                  <li>Patient should read and understand all medical forms including consent forms thoroughly before signing.</li>
                  <li>Patient should follow the prescriptions and agree with the treatment plan, and comply with the instructions given.</li>
                  <li>Patient should keep up the appointments made, or notify the hospital or clinic as early as possible if they are unable to keep up.</li>
                  <li>Patients and visitors should follow the hospital rules concerning attendants, visiting hours and patient conduct.</li>
                  <li>No one is allowed to damage hospital property out of frustration, anger or due to any untoward incident.</li>
                  <li>To faithfully undergo the agreed therapy</li>
                  <li>To follow the care giver’s instructions diligently</li>
                  <li>Follow the “NO SMOKING POLICY” of hospital.</li>
                  <li>To observe the visiting hours schedule of the hospital.</li>
                  <li>To be punctual to visit the doctor/hospital as advised</li>
                  <li>To avoid visiting areas for which you don’t have the permission</li>
                  <li>To follow hand washing and other infections control guidelines strictly</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    Patient should Provide complete and accurate information about his/her health, including pre-condition.
                  </li>
                  <li>To ask questions when you do not understand any information or instructions concerning your care.</li>
                  <li>Patient should not ask healthcare providers to prove incorrect information, receipts or certificates.</li>
                  <li>Patients should not litter the hospital and use garbage bins to put waste. This will help the hospital authorities in keeping the hospital and its surroundings clean.</li>
                  <li>Patients and their attendants should leave their jewellery and valuables at home and bring only items necessary for the hospital stay.</li>
                  <li>Visitors and patients are refrained from bringing alcohol, drugs or weapons into the hospital.</li>
                  <li>To be responsible for all your belongings.</li>
                  <li>To participate in decisions regarding your health</li>
                  <li>To abide by all hospital rules and safety regulations.</li>
                  <li>To maintain and produce all the medical records.</li>
                  <li>Not to pay any kind of tips or gratuity to any of our staff.</li>
                  <li>To clear your dues for the treatment, wherever applicable, promptly.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}

export default PatientsRespons