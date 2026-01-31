import React from 'react'
import innerstyles from "./innerpages.module.css";

const PatientsRights = () => {
  return (
    <section className={innerstyles.rights}>
      <div className="container">
        <h1>Patient & Attendant <span>Rights</span></h1>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li>Right to get considerate and respectful care.</li>
              <li>Right to observe your own social, cultural and spiritual beliefs</li>
              <li>Right to get copies of medical records on request.</li>
              <li>Right to expect prompt treatment in an emergency.</li>
              <li>Right to refuse treatment to the extent permitted by law.</li>
              <li>Right to information on diagnosis, treatment and expected outcomes.</li>
              <li>Right to refuse to participate in human experimentation and research</li>
              <li>Right to know the clinical identity of the professionals involved in patient care.</li>
              <li>Right to information on the care plan, progress and information on their health care needs</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li>Right to give informed consent.</li>
              <li>Right to protection from physical abuse and neglect.</li>
              <li>Right to receive information about follow-up care.</li>
              <li>Right to be informed of hospitals rules and regulations.</li>
              <li>Right to to seek an additional opinion regarding clinical care.</li>
              <li>Right to informed about cost of the treatment and hospital charges</li>
              <li>Right to full consideration of your dignity, privacy and confidentiality.</li>
              <li>Right to the right to complain and receive information on how to voice a complaint.</li>
              <li>Right to prompt resolution of complaints and to be informed about the complaint resolution process.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientsRights