import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Modal,
  Button,
  Carousel,
} from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Website landing page untuk startup bisnis.",
      detail:
        "Project ini dibuat menggunakan React.js & Bootstrap. Fitur utama berupa landing page responsif dengan animasi modern.",
      tech: ["React.js", "Bootstrap", "CSS3"],
      imgUrl: [projImg1, projImg2, projImg3],
      github: "https://github.com/username/project1",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio interaktif.",
      detail:
        "Website ini menampilkan portofolio pribadi dengan animasi menggunakan Animate.css dan library Carousel.",
      tech: ["React.js", "Animate.css", "React-Bootstrap"],
      imgUrl: [projImg2, projImg3],
      github: "https://github.com/username/project2",
    },
    {
      title: "E-Commerce App",
      description: "Aplikasi belanja online fullstack.",
      detail:
        "E-Commerce App ini dibuat menggunakan Laravel untuk backend, MySQL untuk database, dan React untuk frontend.",
      tech: ["Laravel", "MySQL", "React.js"],
      imgUrl: [projImg3, projImg1],
      github: "https://github.com/username/project3",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="project" id="projects" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="fw-bold text-center">Projects</h2>
                  <p className="text-center mb-5">
                    Berikut beberapa project yang pernah saya kerjakan. Klik
                    card untuk melihat detail project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} sm={6} md={4} className="mb-4">
                              <div
                                className="project-card shadow-lg p-3 h-100"
                                style={{
                                  borderRadius: "20px",
                                  background:
                                    "linear-gradient(135deg, rgba(13,110,253,0.9), rgba(102,16,242,0.9))",
                                  color: "white",
                                  cursor: "pointer",
                                  transition: "all 0.3s ease",
                                }}
                                onClick={() => handleOpenModal(project)}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "translateY(-10px) scale(1.03)";
                                  e.currentTarget.style.boxShadow =
                                    "0 8px 20px rgba(102,16,242,0.6)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = "scale(1)";
                                  e.currentTarget.style.boxShadow =
                                    "0 4px 10px rgba(0,0,0,0.3)";
                                }}
                              >
                                <img
                                  src={project.imgUrl[0]}
                                  alt={project.title}
                                  className="img-fluid rounded mb-3"
                                  style={{ borderRadius: "15px" }}
                                />
                                <h5 className="fw-bold">{project.title}</h5>
                                <p>{project.description}</p>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <Modal
  show={showModal}
  onHide={handleCloseModal}
  centered
  size="md"
  contentClassName="border-0 rounded-4 shadow-lg position-relative"
>
  <div
    style={{
      background:
        "linear-gradient(135deg, rgba(13,110,253,0.95), rgba(102,16,242,0.95))",
      color: "white",
      borderRadius: "1rem",
      padding: "1rem",
      position: "relative",
    }}
  >
    {/* Tombol Close Custom */}
    <button
      onClick={handleCloseModal}
      style={{
        position: "absolute",
        top: "40px",       // ✅ lebih kebawah dari header
        right: "20px",
        background: "transparent",
        border: "none",
        color: "white",
        fontSize: "1.8rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        zIndex: 1056,     // ✅ pastikan selalu di atas navbar/header
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffc107")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
    >
      ✖
    </button>

    {/* Judul */}
    <h4 className="fw-bold mb-3 mt-4">{selectedProject?.title}</h4>

    {/* Carousel */}
    {selectedProject && (
      <>
        <Carousel interval={null} className="mb-3">
          {selectedProject.imgUrl.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100 rounded-3"
                src={img}
                alt={`Slide ${idx + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Detail */}
        <p>{selectedProject.detail}</p>
        <h6 className="fw-bold mt-3">Tech Stack:</h6>
        <ul>
          {selectedProject.tech.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      </>
    )}

    {/* Footer */}
    <div className="d-flex justify-content-end gap-2 mt-3">
      {selectedProject?.github && (
        <Button
          variant="light"
          onClick={() => window.open(selectedProject.github, "_blank")}
          style={{ borderRadius: "10px" }}
        >
          🔗 Visit GitHub
        </Button>
      )}
    </div>
  </div>
</Modal>


      {/* Background Dekoratif */}
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
  