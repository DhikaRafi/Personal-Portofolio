import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// Link ImageKit untuk CV Preview
const cvImageLink1 = "https://ik.imagekit.io/1aswtnddf/Muhammad_Dhika_Rafi_CV-1.png?updatedAt=1740126866253";
const cvImageLink2 = "https://ik.imagekit.io/1aswtnddf/Muhammad_Dhika_Rafi_CV-2.png?updatedAt=1740126973805";

// Link Google Drive untuk melihat CV lengkap
const resumeLink = "https://drive.google.com/file/d/17RVyGGbyK7LoeCz0Xq9hHgvFs6vgumwd/view";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Tombol untuk melihat CV di Google Drive */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;View CV
          </Button>
        </Row>

        {/* Menampilkan Gambar CV dari ImageKit */}
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <img 
            src={cvImageLink1} 
            alt="CV Preview Page 1" 
            style={{ width: "100%", maxWidth: "800px", height: "auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} 
          />
        </Row>

        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <img 
            src={cvImageLink2} 
            alt="CV Preview Page 2" 
            style={{ width: "100%", maxWidth: "800px", height: "auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} 
          />
        </Row>

        {/* Tombol kedua jika ingin ditampilkan lagi */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;View CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
