import { useState } from "react";
import { Container, Row, Col, Card, Modal, Carousel } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import certMysql from "../assets/img/sql.jpg";
import internshipQA from "../assets/img/internship.jpg";
import competenceQA1 from "../assets/img/competence1.jpg";
import competenceQA2 from "../assets/img/competence2.jpg";
import toeic from "../assets/img/toeic.jpg"
import ukbi from "../assets/img/ukbi.jpg"
import ai1 from "../assets/img/ai1.jpg"
import ai2 from "../assets/img/ai2.jpg"
import "./Certificates.css";

export const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Database MySQL",
      issuer: "Oracle Academy",
      date: "2025",
      description:
        "Certificate of Completion Database MySQL dari Oracle Academy.",
      imgUrl: [certMysql],
    },
    {
      title: "Internship QA",
      issuer: "Neuronworks",
      date: "2024",
      description:
        "Sertifikasi telah menyelesaikan internship sebagai software QA di PT Neuronworks Indonesia",
      imgUrl: [internshipQA],
    },
    {
      title: "Competence QA",
      issuer: "Neuronwokrs",
      date: "2025",
      description:
        "Sertifikat pengakuan kompetensi sebagai Software QA dengan nilai 96 kategori kompeten oleh PT Neuronworks Indonesia",
      imgUrl: [competenceQA1, competenceQA2],
    },
    {
      title: "TOEIC",
      issuer: "ETS",
      date: "2025",
      description:
        "Sertifikat hasil tes uji kemahiran bahasa inggris TOEIC yang dikeluarkan oleh ETS berlaku sampai tahun 2026",
      imgUrl: [toeic],
    },
    {
      title: "UKBI",
      issuer: "Kemendikbudristek",
      date: "2025",
      description:
        "Sertifikat hasil tes uji kemahiran bahasa indonesia yang dikeluarkan oleh Badan Pengembangan dan Pembinaan Bahasa berlaku sampati tahun 2026",
      imgUrl: [ukbi],
    },
    {
      title: "Belajar Dasar Artificial Intelligence",
      issuer: "Dicoding Indonesia",
      date: "2025",
      description:
        "Sertifikat kelulusan dari Dicoding Indonesia yang membahas konsep dasar Artificial Intelligence, termasuk pengenalan AI, machine learning, deep learning, data preparation, serta penerapan AI dalam kehidupan dan pengembangan aplikasi.",
      imgUrl: [ai1, ai2],
    }

  ];

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  return (
    <section
      className="certificate-section"
      id="certificates"
      style={{ position: "relative" }}
    >
      <Container>
        <Row>
          <Col>
           <h2 className="fw-bold text-center">Certificates</h2>
            <p className="text-center mb-5">Beberapa sertifikasi yang saya peroleh. Klik card untuk melihat detail.</p>

            <Row>
              {certificates.map((cert, index) => (
                <Col key={index} sm={6} md={4} className="mb-4">
                  <Card
                    className="cert-card shadow-lg h-100"
                    onClick={() => handleOpenModal(cert)}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(30,30,50,0.95), rgba(50,20,70,0.95))",
                      color: "white",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      borderRadius: "20px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-10px) scale(1.03)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(102,16,242,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
                    }}
                  >
                    <Card.Img
                        variant="top"
                        src={cert.imgUrl[0]}
                        alt={cert.title}
                        style={{ 
                            borderRadius: "15px",
                            width: "100%",
                            height: "200px",        // biar menyesuaikan proporsi gambar
                            aspectRatio: "4/3",    // default rasio, landscape-ish
                            objectFit: "cover"
                        }}
                        />
                    <Card.Body>
                      <Card.Title className="fw-bold">{cert.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {cert.issuer} • {cert.date}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="custom-modal"
        contentClassName="border-0 rounded-4 shadow-lg position-relative"
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(30,30,50,0.95), rgba(50,20,70,0.95))",
            color: "white",
            borderRadius: "1rem",
            padding: "2rem",
            position: "relative",
            textAlign: "left",
          }}
        >
          {/* Judul + Close */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h4 className="fw-bold mb-0">{selectedCert?.title}</h4>
            <button
              onClick={handleCloseModal}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "1.8rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc107")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              ✖
            </button>
          </div>

          {/* Carousel */}
          {selectedCert && (
            <Carousel
              interval={null}
              className="mb-4"
              nextIcon={
                <span
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #0d6efd, #6610f2)";
                    e.currentTarget.style.transform = "scale(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,0,0,0.3)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  ❯
                </span>
              }
              prevIcon={
                <span
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #0d6efd, #6610f2)";
                    e.currentTarget.style.transform = "scale(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,0,0,0.3)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  ❮
                </span>
              }
            >
              {selectedCert.imgUrl.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100 rounded-3"
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    style={{
                        objectFit: "contain",   // tampil penuh, sesuai rasio asli
                        maxHeight: "400px",     // maksimal tinggi carousel
                        width: "100%"            // lebar penuh
                    }}
                    />
                </Carousel.Item>
              ))}
            </Carousel>
          )}

          {/* Detail */}
          <p>
            <strong>Issuer:</strong> {selectedCert?.issuer}
          </p>
          <p>
            <strong>Tahun:</strong> {selectedCert?.date}
          </p>
          <p>{selectedCert?.description}</p>
        </div>
      </Modal>

      {/* Background */}
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bg"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "250px",
          opacity: 0.2,
        }}
      />
    </section>
  );
};
