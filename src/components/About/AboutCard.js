import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am highly proficient in the field of data analysis, employing tools such as 
            <b className="purple"> Looker Studio, Tableau, Google Sheets,</b> and <b className="purple">Excel </b> 
            to produce insights and facilitate informed decision-making.
            <br />
            <br />
            I strive to present complex information in a clear and meaningful way, 
            drawing from my strong background in <b className="purple">data visualization and analysis</b>.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Visualizing Data 
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Business Insights
            </li>
            <li className="about-activity">
              <ImPointRight /> Machine Learning & AI
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning data into actionable insights!"{" "}
          </p>
          <footer className="blockquote-footer">Dhika Rafi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
