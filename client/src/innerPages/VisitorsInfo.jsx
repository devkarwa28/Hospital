import innerstyles from "./innerpages.module.css";

const VisitorsInfo = () => {
  return (
    <section className={innerstyles.admission}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img src="images/srh-visitor.jpg" alt="" />
          </div>
          <div className="col-lg-5">
            <div className={innerstyles.photo_box}>
              <h1>
                Guidelines for Visitors & Attendants
              </h1>
              <h2>
                We understand how anxious you may be as a patient’s relative to be here to hear good news such as “Improvement in patient condition”, or “Surgery went on well” etc. Amidst all these we would like to have your co-operation, so that we can help you in the best ways possible.

                In the interest of quality patient care and patient privacy, visitors may not be permitted in the treatment area during the patient examination or critical treatment. They will be directed to wait in the unit’s lobby until examination and treatment have reached a point which allows them to return, unless the acting physician specifically requests visitation for you at that time.

                It’s our goal to create an exceptional experience when you visit Shri Ram Hospital. Below, you’ll find useful information about your upcoming visit, including visitation rights, what to expect during your visit, and more.
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h4>General Rules Regarding Visitors</h4>
          <h5>Kindly go through the following important information.</h5>
          <ul>
            <li>All patient visitors will be allowed access to In Patient floors only when carrying valid visitor passes.</li>
            <li>All patient visitors will be allowed access to In Patient floors only when carrying valid visitor passes.</li>
            <li>At the time of admission only ONE attendant pass and ONE visitor pass for a patient is given.</li>
            <li>Please note that visitors may be restricted according to a patient’s medical condition and/or special needs.</li>
            <li>
              Visitors are not to consume alcoholic beverages or illegal drugs, litter or loiter in the hallways while within hospital.
            </li>
            <li>
              Visitors are not permitted in non-patient areas such as utility rooms, nurses’ stations and kitchens. Visitors may use the cafeteria and waiting area. food or beverages may not allowed into patient rooms.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default VisitorsInfo