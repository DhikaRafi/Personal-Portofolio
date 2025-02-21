import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import nyctlc from "../../Assets/Projects/nyctlc.jpg";
import wholesale from "../../Assets/Projects/wholesale.jpg";
import stock from "../../Assets/Projects/stock.jpeg";
import travelinsurance from "../../Assets/Projects/travelinsurance.jpg";
import government from "../../Assets/Projects/government.png";
import bicycle from "../../Assets/Projects/bicycle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={government}
              isBlog={false}
              title="Indonesian Government Policy Sentiment Analysis"
              description="Analyzes public sentiment on Indonesian government policies using natural language processing (NLP). Examines social media, news, and public opinions to classify sentiments, identify trends, and provide insights for policy evaluation and decision-making."
              ghLink="https://github.com/DhikaRafi/Government-Policy-Sentiment-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelinsurance}
              isBlog={false}
              title="Travel Insurance Claim Prediction"
              description="Predicts travel insurance claims using machine learning models, analyzing customer profiles, travel details, and historical claim data to assess risk and improve claim processing efficiency."
              ghLink="https://github.com/DhikaRafi/Capstone_3_Muhammad_Dhika_Rafi_Travel_Insurance_Claim"
              demoLink="https://capstone3travelinsurancedhikarafi.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="ISAT Stock Price Forecasting"
              description="Forecasts ISAT stock prices using the Prophet model, analyzing historical trends, seasonality, and market patterns to generate accurate time series predictions for informed investment decisions."
              ghLink="https://github.com/DhikaRafi/ISAT-Stock-Forecasting"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wholesale}
              isBlog={false}
              title="Wholesale Company RFM Analysis"
              description="Analyzes Wholesale Company customer data using RFM (Recency, Frequency, Monetary) analysis to segment customers based on purchase behavior. Identifies high-value customers, retention opportunities, and strategic insights to enhance sales and marketing efforts."
              ghLink="https://github.com/DhikaRafi/Wholesale-Company-RFM-Analysis/blob/main/Wholesale%20Company%20RFM%20Analysis.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyctlc}
              isBlog={false}
              title="NYC TLC Analysis"
              description="Analyzes NYC TLC trip data to identify peak hours and taxi demand patterns. Focuses on trip frequency, revenue impact, and borough-wise variations to optimize fleet allocation and service efficiency."
              ghLink="https://github.com/DhikaRafi/Capstone_3_Muhammad_Dhika_Rafi_Travel_Insurance_Claim"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Cohort Analysis"
              description="Analyzes cohort retention for an e-commerce platform (2019–2024), focusing on data processing, retention calculations, and heatmap visualization to enhance customer loyalty strategies."
              ghLink="https://github.com/DhikaRafi/E-Commerce-Cohort-Analysis/blob/main/E-Commerce_Cohort_Analysis.ipynb"
            />
          </Col>
        </Row>

        {/* CRUD Bike Shop Pindah ke Bawah */}
        <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bicycle}
              isBlog={false}
              title="Bike Shop Management Sytem"
              description="Develops a management system for a bike shop, enabling efficient tracking of inventory, sales, and stock updates to streamline operations and improve business insights."
              ghLink="https://github.com/DhikaRafi/CRUD-Bike-Shop/blob/main/Capstone1-MuhammadDhikaRafi.py"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
