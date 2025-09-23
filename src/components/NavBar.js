  import { useState, useEffect } from "react";
  import { Navbar, Nav, Container } from "react-bootstrap";
  import navIcon1 from '../assets/img/nav-icon1.svg'; // LinkedIn
  import navIcon3 from '../assets/img/nav-icon3.svg'; // Instagram
  import tiktokIcon from '../assets/img/tiktok.svg';   // TikTok
  import githubIcon from '../assets/img/github.svg';   // GitHub (tambahkan file svg di assets/img)
  import { HashLink } from 'react-router-hash-link';
  import { BrowserRouter as Router } from "react-router-dom";

  export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };

    return (
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            {/* Logo */}
            <Navbar.Brand
              href="/"
              className="flex-grow-1"
              style={{
                fontWeight: "900",
                fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                background: "linear-gradient(90deg, #7f5af0, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "1.2px",
                whiteSpace: "nowrap"
              }}
            >
              KRD
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link 
                  href="#home" 
                  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                  onClick={() => onUpdateActiveLink('home')}
                >Home</Nav.Link>

                <Nav.Link 
                  href="#skills" 
                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                  onClick={() => onUpdateActiveLink('skills')}
                >Skills</Nav.Link>

                <Nav.Link 
                  href="#projects" 
                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                  onClick={() => onUpdateActiveLink('projects')}
                >Projects</Nav.Link>

                <Nav.Link 
                  href="#certificates" 
                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                  onClick={() => onUpdateActiveLink('certificates')}
                >Certificates</Nav.Link>

                {/* Menu CV */}
                <Nav.Link 
                  href="/cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={activeLink === 'cv' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('cv')}
                >
                  CV
                </Nav.Link>
              </Nav>

              {/* Social Icons */}
              <span className="navbar-text">
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
            <HashLink to="#connect">
              <button
                className="vvd"
                style={{
                  padding: "10px 15px",
                  marginRight: "auto",   // dorong tombol ke kanan
                  fontSize: "1rem",
                }}
              >
                <span>Let’s Connect</span>
              </button>
            </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    );
  };
