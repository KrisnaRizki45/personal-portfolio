import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button } from "react-bootstrap";
import { CodeSlash, CheckCircle, CameraVideo, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Custom tombol kiri
  const CustomLeftArrow = ({ onClick }) => (
    <Button
      onClick={onClick}
      className="custom-arrow"
      style={{
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        borderRadius: "50%",
        backgroundColor: "rgba(0,0,0,0.5)",
        border: "none",
        padding: "10px",
      }}
    >
      <ChevronLeft size={24} />
    </Button>
  );

  // Custom tombol kanan
  const CustomRightArrow = ({ onClick }) => (
    <Button
      onClick={onClick}
      className="custom-arrow"
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        borderRadius: "50%",
        backgroundColor: "rgba(0,0,0,0.5)",
        border: "none",
        padding: "10px",
      }}
    >
      <ChevronRight size={24} />
    </Button>
  );

  return (
    <section
      className="skill"
      id="skills"
      style={{
        background: "linear-gradient(135deg, #0d6efd, #6610f2)",
        color: "#fff",
        padding: "60px 0",
        position: "relative",
        margin: "40px 0",
        borderRadius: "30px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="skill-bx animate__animated animate__fadeInUp">
              <h2 className="fw-bold mb-3">My Skills</h2>
              <p className="mb-5">
                Berpengalaman dalam <b>Artificial Intelligence</b>, <b>Full Stack Development</b>,
                <b> Mobile Development</b>, <b>DevOps</b>, <b>System Administration</b>,
                <b> Quality Assurance</b>, serta <b>Enterprise Application Development</b>.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                {/* AI Engineering */}
                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CodeSlash size={45} className="mb-3 text-info" />
                      <Card.Title className="fw-bold">
                        AI Engineering
                      </Card.Title>
                      <Card.Text>
                        Python, OpenAI API, LLM, Prompt Engineering, AI Automation,
                        AI Integration
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* Full Stack Development */}
                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CodeSlash size={45} className="mb-3 text-primary" />
                      <Card.Title className="fw-bold">
                        Full Stack Development
                      </Card.Title>
                      <Card.Text>
                        React, Next.js, TypeScript, Laravel, Node.js, Express.js,
                        PHP, Golang
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* Mobile Development */}
                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CodeSlash size={45} className="mb-3 text-success" />
                      <Card.Title className="fw-bold">
                        Mobile Development
                      </Card.Title>
                      <Card.Text>
                        Flutter, Dart, REST API
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CheckCircle size={45} className="mb-3 text-warning" />
                      <Card.Title className="fw-bold">
                        Backend & Database
                      </Card.Title>
                      <Card.Text>
                        Prisma ORM, MySQL, PostgreSQL, Oracle,
                        MongoDB, Supabase, Firebase
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CheckCircle size={45} className="mb-3 text-success" />
                      <Card.Title className="fw-bold">
                        Quality Assurance
                      </Card.Title>
                      <Card.Text>
                        Cypress, Selenium, Postman,
                        Manual Testing, API Testing,
                        Automation Testing
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CodeSlash size={45} className="mb-3 text-danger" />
                      <Card.Title className="fw-bold">
                        DevOps & Infrastructure
                      </Card.Title>
                      <Card.Text>
                        Git, GitHub, GitLab, CI/CD,
                        Linux, Docker, Monitoring
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CodeSlash size={45} className="mb-3 text-light" />
                      <Card.Title className="fw-bold">
                        System Administration
                      </Card.Title>
                      <Card.Text>
                        Windows, Linux, Server Management,
                        SQL Tuning, Log Analysis
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CodeSlash size={45} className="mb-3 text-info" />
                      <Card.Title className="fw-bold">
                        Programming Languages
                      </Card.Title>
                      <Card.Text>
                        JavaScript, TypeScript, Python,
                        PHP, Golang, Dart, SQL
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CodeSlash size={45} className="mb-3 text-primary" />
                      <Card.Title className="fw-bold">
                        Frameworks
                      </Card.Title>
                      <Card.Text>
                        Next.js, React.js, Laravel,
                        Django, Express.js,
                        Flutter
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "240px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <Card.Body>
                      <CameraVideo size={45} className="mb-3 text-warning" />
                      <Card.Title className="fw-bold">
                        Tools & Productivity
                      </Card.Title>
                      <Card.Text>
                        VS Code, DBeaver, Laragon,
                        Microsoft Office,
                        Canva, CapCut
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* background image */}
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "250px",
          opacity: 0.15,
        }}
      />

      {/* Custom CSS untuk hover/active */}
      <style>{`
        .custom-arrow {
          color: white;
          transition: background-color 0.3s, transform 0.2s;
        }
        .custom-arrow:hover {
          background-color: #6610f2 !important;
          color: #fff;
          transform: scale(1.1);
        }
        .custom-arrow:active {
          background-color: #520dc2 !important;
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};
