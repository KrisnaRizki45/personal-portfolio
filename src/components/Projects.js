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
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
  {
    title: "Ardexa",
    description: "Web Company Ardexa",
    detail: "Website perusahaan PT Arsa Dalu Kreasi yang menampilkan layanan informasi lengkap mengenai perusahaan termasuk informasi karir dengan tampilan yang responsive",
    tech: ["React JS", "Tailwind CSS", "Node JS"],
    imgUrl: [
      "/images/ardexa1.png",
      "/images/ardexa2.png",
      "/images/ardexa3.png",
      "/images/ardexa4.png",
      "/images/ardexa5.png",
      "/images/ardexa6.png",
      "/images/ardexa7.png"
    ],
    github: "https://github.com/KrisnaRizki45/PT.-ADK",
    category: "web",
  },
  {
    title: "JacketPedia",
    description: "Website E-Commerce ",
    detail: "Sebuah website e-commerce yang menjual jaket trendy dengan sistem manajemen keranjang belanja dan checkout untuk kebutuhan tugas akhir sekolah",
    tech: ["HTML", "CSS", "JavaScript", "Vue JS"],
    imgUrl: [
      "/images/E-Commerce1.png",
      "/images/E-Commerce2.png",
      "/images/E-Commerce3.png"
    ],
    github: "https://github.com/KrisnaRizki45/JacketPedia",
    category: "web",
  },
  {
    title: "E-Lib",
    description: "Aplikasi Perpustakaan",
    detail: "Merupakan aplikasi perpustakaan digital SMKN 4 Bandung website yang dinamis dengan sistem role admin staff siswa memiliki database",
    tech: ["Laravel", "PHP", "MySQL"],
    imgUrl: [
      "/images/E-Lib1.png",
      "/images/E-Lib2.png",
      "/images/E-Lib3.png"
    ],
    github: "#",
    category: "web",
  },
  {
    title: "GerobakIn",
    description: "Aplikasi penitipan gerobak",
    detail: "Merupakan aplikasi penitipan gerobak dengan sistem crud, login jwt, token, dan database dengan tampilan responsive",
    tech: ["React.js", "Bootstrap", "Laravel", "MySQL", "JWT Token", "CRUD"],
    imgUrl: [
      "/images/gerobak5.png",
      "/images/gerobak6.png",
      "/images/gerobak7.png",
      "/images/gerobak8.png",
      "/images/gerobak9.png",
      "/images/gerobak10.png",
      "/images/gerobak1.png",
      "/images/gerobak2.png",
      "/images/gerobak3.png",
      "/images/gerobak4.png",
    ],
    github: "https://github.com/KrisnaRizki45/GerobakIn",
    category: "web",
  },
  {
    title: "Laundry App",
    description: "Sistem manajemen laundry",
    detail: "Aplikasi sistem manajemen laundry dengan sistem CRUD, Login JWT Token, Registrasi, dan api buatan dengan tampilan responsive",
    tech: ["React.js", "Bootstrap", "HeroUI", "Tailwind CSS"],
    imgUrl: [
      "/images/laundry3.png",
      "/images/laundry4.png",
      "/images/laundry5.png",
      "/images/laundry6.png",
      "/images/laundry7.png",
      "/images/laundry8.png",
      "/images/laundry9.png",
      "/images/laundry10.png",
      "/images/laundry11.png",
      "/images/laundry12.png",
      "/images/laundry13.png",
      "/images/laundry1.png",
      "/images/laundry2.png",
    ],
    github: "https://github.com/KrisnaRizki45/laundry-app",
    category: "web",
  },
  {
    title: "Movify",
    description: "Website streaming film",
    detail: "Website streaming film dengan api dari TMDB yang responsive",
    tech: ["React.js", "Bootstrap", "Tailwind CSS", "API TMDB"],
    imgUrl: [
      "/images/movify1.png",
      "/images/movify2.png",
      "/images/movify3.png",
      "/images/movify4.png"
    ],
    github: "https://github.com/KrisnaRizki45/Challange-react-movie",
    category: "other",
  },
  {
    title: "Content Creator",
    description: "Sosial Media Perusahaan",
    detail: "Profile sosial media dari perusahaan yang saya sebagai content creator nya di Instagram dan Tiktok",
    tech: ["Canva", "Capcut"],
    imgUrl: [
      "/images/contentCreator1.png",
      "/images/contentCreator2.png",
    ],
    github: "#",
    category: "other",
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

  // Komponen ProjectCard
  const ProjectCard = ({ project }) => (
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
        e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(102,16,242,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
      }}
    >
      <img
        src={project.imgUrl[0]}
        alt={project.title}
        className="img-fluid rounded mb-3"
        style={{ borderRadius: "15px", objectFit: "cover", height: "auto", width: "100%" }}
      />
      <h5
        className="fw-bold"
        style={{
          fontSize: "1.1rem",
          marginBottom: "0.3rem",
          lineHeight: "1.3",
          color: "#ffffff",
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
        }}
      >
        {project.title}
      </h5>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#e0e0e0",
          margin: "0",
          padding: "0",
          lineHeight: "1.4",
          textAlign: "justify",
        }}
      >
        {project.description}
      </p>
    </div>
  );

  return (
    <section className="project" id="projects" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="fw-bold text-center">Projects</h2>
                  <p className="text-center mb-5">
                    Berikut beberapa project yang pernah saya kerjakan. Klik card untuk melihat detail project.
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
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* All Projects */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} sm={6} md={4} className="mb-4">
                              <ProjectCard project={project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Web Apps */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects
                            .filter((p) => p.category === "web")
                            .map((project, index) => (
                              <Col key={index} sm={6} md={4} className="mb-4">
                                <ProjectCard project={project} />
                              </Col>
                            ))}
                        </Row>
                      </Tab.Pane>

                      {/* Others */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects
                            .filter((p) => p.category === "other")
                            .map((project, index) => (
                              <Col key={index} sm={6} md={4} className="mb-4">
                                <ProjectCard project={project} />
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

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="md"
        dialogClassName="custom-modal"
        contentClassName="border-0 rounded-4 shadow-lg position-relative"
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(13,110,253,0.95), rgba(102,16,242,0.95))",
            color: "white",
            borderRadius: "1rem",
            padding: "2rem",
            position: "relative",
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <h4 className="fw-bold mb-0">{selectedProject?.title}</h4>
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

          {selectedProject && (
            <>
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
                {selectedProject.imgUrl.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100 rounded-3"
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      style={{ objectFit: "cover", maxHeight: "300px" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <p style={{ marginBottom: "1.5rem" }}>{selectedProject?.detail}</p>

              <h6 className="fw-bold mb-2">Tech Stack:</h6>
              <ul style={{ paddingLeft: "20px", marginBottom: "2rem" }}>
                {selectedProject?.tech.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>

              {selectedProject?.github && (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="light"
                    onClick={() => window.open(selectedProject.github, "_blank")}
                    style={{ borderRadius: "10px", transition: "all 0.3s ease", color: "#000" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#333";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.color = "#000";
                    }}
                  >
                    🔗 Visit GitHub
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </Modal>

      {/* Background */}
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bg"
        style={{ position: "absolute", right: 0, bottom: 0, width: "250px", opacity: 0.2 }}
      />
    </section>
  );
};
