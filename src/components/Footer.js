import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import tiktokIcon from '../assets/img/tiktok.svg'; 
import navIcon3 from "../assets/img/nav-icon3.svg";
import githubIcon from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          {/* Logo Footer */}
          <Col size={12} sm={6}>
            <span
              style={{
                fontWeight: "900",
                fontSize: "2rem",
                background: "linear-gradient(90deg, #7f5af0, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "2px",
                display: "inline-block"
              }}
            >
              KRD
            </span>
          </Col>

          {/* Sosmed + Copyright */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/krisnard" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://instagram.com/krisnarizkiii" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Instagram" />
                </a>
                <a href="https://tiktok.com/@krisnarizkii" target="_blank" rel="noopener noreferrer">
                  <img src={tiktokIcon} alt="TikTok" />
                </a>
                <a href="https://github.com/KrisnaRizki45" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
            <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#aaa" }}>
              © {new Date().getFullYear()} Krisna Rizki Dermawan. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
