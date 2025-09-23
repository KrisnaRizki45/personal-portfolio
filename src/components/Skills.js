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
                Berfokus pada <b>Web Development</b>, <b>Quality Assurance</b>, serta{" "}
                <b>Content Creator</b>.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                {/* Web Development */}
                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "220px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Card.Body>
                      <CodeSlash size={45} className="mb-3 text-info" />
                      <Card.Title className="fw-bold">
                        Web Developer
                      </Card.Title>
                      <Card.Text>
                        React.js, Laravel, HTML, CSS, JavaScript, PHP, MySQL
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* Quality Assurance */}
                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "220px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Card.Body>
                      <CheckCircle size={45} className="mb-3 text-success" />
                      <Card.Title className="fw-bold">
                        Quality Assurance
                      </Card.Title>
                      <Card.Text>
                        Manual Testing, Automation, Cypress, Postman, Selenium
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* Content Creator */}
                <div className="item">
                  <Card
                    className="text-center shadow-lg border-0"
                    style={{
                      minHeight: "220px",
                      borderRadius: "20px",
                      background: "rgba(0,0,0,0.5)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Card.Body>
                      <CameraVideo size={45} className="mb-3 text-warning" />
                      <Card.Title className="fw-bold">
                        Content Creator
                      </Card.Title>
                      <Card.Text>Canva, CapCut</Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {/* Sistem Operasi */}
              <div className="item">
                <Card
                  className="text-center shadow-lg border-0"
                  style={{
                    minHeight: "220px",
                    borderRadius: "20px",
                    background: "rgba(0,0,0,0.5)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Card.Body>
                    <CodeSlash size={45} className="mb-3 text-primary" />
                    <Card.Title className="fw-bold">Sistem Operasi</Card.Title>
                    <Card.Text>
                      Windows, Linux, macOS
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              {/* Microsoft Office */}
              <div className="item">
                <Card
                  className="text-center shadow-lg border-0"
                  style={{
                    minHeight: "220px",
                    borderRadius: "20px",
                    background: "rgba(0,0,0,0.5)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Card.Body>
                    <CheckCircle size={45} className="mb-3 text-warning" />
                    <Card.Title className="fw-bold">Microsoft Office</Card.Title>
                    <Card.Text>
                      Word, Excel, PowerPoint, Outlook
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
