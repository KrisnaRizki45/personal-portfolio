import { useMemo, useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button, Carousel } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const tabs = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Web Apps" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "ai", label: "AI Projects" },
  { key: "other", label: "Others" },
];

const projects = [
  {
    title: "Ardexa",
    description: "Web Company Ardexa",
    detail:
      "Website perusahaan PT Arsa Dalu Kreasi yang menampilkan layanan informasi lengkap mengenai perusahaan termasuk informasi karir dengan tampilan yang responsive.",
    tech: ["React JS", "Tailwind CSS", "Node JS"],
    imgUrl: [
      "/images/ardexa1.png",
      "/images/ardexa2.png",
      "/images/ardexa3.png",
      "/images/ardexa4.png",
      "/images/ardexa5.png",
      "/images/ardexa6.png",
      "/images/ardexa7.png",
    ],
    github: "https://github.com/KrisnaRizki45/PT.-ADK",
    categories: ["web"],
  },
  {
    title: "JacketPedia",
    description: "Website E-Commerce",
    detail:
      "Sebuah website e-commerce yang menjual jaket trendy dengan sistem manajemen keranjang belanja dan checkout untuk kebutuhan tugas akhir sekolah.",
    tech: ["HTML", "CSS", "JavaScript", "Vue JS"],
    imgUrl: ["/images/E-Commerce1.png", "/images/E-Commerce2.png", "/images/E-Commerce3.png"],
    github: "https://github.com/KrisnaRizki45/JacketPedia",
    categories: ["web"],
  },
  {
    title: "E-Lib",
    description: "Aplikasi Perpustakaan",
    detail:
      "Merupakan aplikasi perpustakaan digital SMKN 4 Bandung website yang dinamis dengan sistem role admin, staff, siswa, dan database.",
    tech: ["Laravel", "PHP", "MySQL"],
    imgUrl: ["/images/E-Lib1.png", "/images/E-Lib2.png", "/images/E-Lib3.png"],
    github: "",
    categories: ["web"],
  },
  {
    title: "GerobakIn",
    description: "Aplikasi penitipan gerobak",
    detail:
      "Merupakan aplikasi penitipan gerobak dengan sistem CRUD, login JWT token, dan database dengan tampilan responsive.",
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
    categories: ["web"],
  },
  {
    title: "Laundry App",
    description: "Sistem manajemen laundry",
    detail:
      "Aplikasi sistem manajemen laundry dengan sistem CRUD, login JWT token, registrasi, dan API buatan dengan tampilan responsive.",
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
    categories: ["web"],
  },
  {
    title: "Movify",
    description: "Website streaming film",
    detail: "Website streaming film dengan API dari TMDB yang responsive.",
    tech: ["React.js", "Bootstrap", "Tailwind CSS", "API TMDB"],
    imgUrl: ["/images/movify1.png", "/images/movify2.png", "/images/movify3.png", "/images/movify4.png"],
    github: "https://github.com/KrisnaRizki45/Challange-react-movie",
    categories: ["other"],
  },
  {
    title: "Content Creator",
    description: "Sosial Media Perusahaan",
    detail:
      "Profile sosial media dari perusahaan tempat saya berperan sebagai content creator di Instagram dan TikTok.",
    tech: ["Canva", "Capcut"],
    imgUrl: ["/images/contentCreator1.png", "/images/contentCreator2.png"],
    github: "",
    categories: ["other"],
  },
  {
    title: "MSO3 Tools",
    description: "Enterprise Operations & AI Workspace",
    detail:
      "MSO3 Tools merupakan platform enterprise internal yang dikembangkan sebagai pusat operasional digital bagi tim MSO PT Neuronworks Indonesia. Platform ini mengintegrasikan Ticket Management, User Management, AI Chat berbasis Large Language Models, AI Knowledge Base, Reporting & Data Analytics, API Monitoring, Dashboard Monitoring, Approval Management, Data Extraction, Automation Tools, hingga System Configuration.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS", "LLM Models"],
    imgUrl: [
      "/images/msos (1).png",
      "/images/msos (2).png",
      "/images/msos (3).png",
      "/images/msos (4).png",
      "/images/msos (5).png",
      "/images/msos (6).png",
      "/images/msos (7).png",
      "/images/msos (8).png",
    ],
    github: "https://github.com/oponeuron-sketch/mso3-tools.git",
    categories: ["web", "ai"],
  },
  {
    title: "Personal Portfolio",
    description: "Modern Developer Portfolio",
    detail:
      "Website portofolio pribadi yang menampilkan profil profesional, pengalaman kerja, proyek, keahlian, sertifikasi, serta informasi kontak. Dibangun dengan desain modern, responsif, dan interaktif.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    imgUrl: ["/images/porto (1).png", "/images/porto (2).png", "/images/porto (3).png", "/images/porto (4).png"],
    github: "https://github.com/KrisnaRizki45/portofolio-emil.git",
    categories: ["web"],
  },
  {
    title: "UT Online Mobile",
    description: "Telkom Technician Mobile Application",
    detail:
      "Aplikasi mobile yang digunakan untuk mendukung aktivitas operasional teknisi Telkom di lapangan. Menyediakan fitur monitoring order, validasi pekerjaan, pelaporan progres, manajemen data pelanggan, serta integrasi dengan sistem backend.",
    tech: ["Flutter", "Dart", "REST API", "Oracle Database"],
    imgUrl: ["/images/utmobile1.png", "/images/utmobile2.png", "/images/utmobile3.png", "/images/utmobile4.png"],
    github: "https://github.com/KrisnaRizki45/ut-mobile.git",
    categories: ["mobile"],
    imageMode: "portrait",
  },
  {
    title: "PTBMA",
    description: "Enterprise Management Information System",
    detail:
      "Aplikasi enterprise berbasis web yang dikembangkan untuk mendukung pengelolaan data operasional dan administrasi perusahaan. Memiliki fitur dashboard, manajemen data, monitoring, reporting, autentikasi pengguna, serta visualisasi informasi.",
    tech: ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
    imgUrl: [
      "/images/ptbma1.png",
      "/images/ptbma2.png",
      "/images/ptbma3.png",
      "/images/ptbma4.png",
      "/images/ptbma5.png",
      "/images/ptbma6.png",
      "/images/ptbma7.png",
    ],
    github: "https://github.com/KrisnaRizki45/PT-BMA.git",
    categories: ["web"],
  },
];

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectGroups = useMemo(
    () =>
      tabs.reduce((groups, tab) => {
        groups[tab.key] =
          tab.key === "all" ? projects : projects.filter((project) => project.categories.includes(tab.key));
        return groups;
      }, {}),
    []
  );

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project }) => (
    <button type="button" className="project-card" onClick={() => handleOpenModal(project)}>
      <span className={`project-card__media ${project.imageMode === "portrait" ? "is-portrait" : ""}`}>
        <img src={project.imgUrl[0]} alt={project.title} loading="lazy" />
      </span>
      <span className="project-card__body">
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__description">{project.description}</span>
        <span className="project-card__meta">{project.tech.slice(0, 3).join(" | ")}</span>
      </span>
    </button>
  );

  const ProjectGrid = ({ items }) => (
    <Row className="project-grid">
      {items.map((project) => (
        <Col key={project.title} xs={12} sm={6} lg={4} className="project-grid__item">
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p className="project__intro">
                    Berikut beberapa project yang pernah saya kerjakan. Klik card untuk melihat detail project.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="all">
                    <Nav variant="pills" className="project-tabs mb-5">
                      {tabs.map((tab) => (
                        <Nav.Item key={tab.key}>
                          <Nav.Link eventKey={tab.key}>{tab.label}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {tabs.map((tab) => (
                        <Tab.Pane eventKey={tab.key} key={tab.key}>
                          <ProjectGrid items={projectGroups[tab.key]} />
                        </Tab.Pane>
                      ))}
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
        className="project-modal-shell"
        backdrop={false}
        dialogClassName="project-modal"
        contentClassName="project-modal__content"
      >
        {selectedProject && (
          <div className="project-modal__inner">
            <div className="project-modal__header">
              <div>
                <span className="project-modal__eyebrow">{selectedProject.description}</span>
                <h4>{selectedProject.title}</h4>
              </div>
              <button type="button" className="project-modal__close" onClick={handleCloseModal} aria-label="Close">
                x
              </button>
            </div>

            <Carousel interval={null} className="project-carousel">
              {selectedProject.imgUrl.map((img, idx) => (
                <Carousel.Item key={img}>
                  <div className={`project-carousel__frame ${selectedProject.imageMode === "portrait" ? "is-portrait" : ""}`}>
                    <img src={img} alt={`${selectedProject.title} screenshot ${idx + 1}`} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            <p className="project-modal__detail">{selectedProject.detail}</p>

            <div className="project-modal__tech">
              {selectedProject.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {selectedProject.github && (
              <div className="project-modal__actions">
                <Button variant="light" onClick={() => window.open(selectedProject.github, "_blank", "noreferrer")}>
                  Visit GitHub
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
