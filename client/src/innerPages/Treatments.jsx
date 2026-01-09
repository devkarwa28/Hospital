import React, { useEffect, useState } from "react";
import innerstyles from "./innerpages.module.css";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Treatments = () => {
  const [treatment, setTreatment] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/treatments")
      .then((res) => {
        setTreatment(res.data);
      })
      .catch((err) => {
        alert("Cannot Load Treatment Data");
      });
  });
  return (
    <main>
      <section className={innerstyles.breadcrums}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">TREATMENTS</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            {treatment.map((treat) => {
              return (
                <>
                  <div className="col-3">
                    <Card className={`mb-3 ${innerstyles.card}`}>
                    <Card.Img variant="top" />
                    <Card.Body>
                      <Card.Title>{treat.tname}</Card.Title>
                      <Card.Text>
                        {treat.tdesc} 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Treatments;
