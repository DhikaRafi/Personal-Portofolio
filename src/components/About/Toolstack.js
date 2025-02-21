import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPlotly, // Alternatif untuk Matplotlib
  SiGooglemaps, // Alternatif untuk Folium
  SiOpenai, // Alternatif ikon untuk "etc."
} from "react-icons/si";
import { DiPython } from "react-icons/di"; // Representasi umum untuk Seaborn

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
    </Row>
  );
}

export default Toolstack;
