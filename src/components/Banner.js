import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  // Ganti sesuai role kamu
 const toRotate = [
  "AI Engineer",
  "Full Stack Engineer",
  "Software Engineer",
  "Technical Support Engineer",
  "DevOps Engineer",
  "Quality Assurance Engineer"
];

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Krisna`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                <p>
                  Saya merupakan seorang <strong>Software Engineer</strong> yang memiliki
                  minat kuat pada <strong>Full Stack Development</strong>,
                  <strong>Artificial Intelligence (AI)</strong>, dan 
                  <strong>Enterprise System Development</strong>. Berpengalaman dalam
                  mengembangkan aplikasi web dan mobile menggunakan teknologi modern seperti
                  <strong>Next.js, React, TypeScript, Laravel, Flutter, Golang, Prisma, PostgreSQL, MongoDB</strong>,
                  serta mengintegrasikan <strong>REST API</strong> dan
                  <strong>Large Language Models (LLMs)</strong> untuk membangun solusi yang
                  cerdas dan efisien.
                  <br /><br />
                  Selain pengembangan aplikasi, saya juga memiliki pengalaman sebagai
                  <strong>Technical Support Engineer</strong>,
                  <strong>Quality Assurance</strong>, dan
                  <strong>System Administrator</strong> dalam menangani monitoring sistem,
                  troubleshooting, automation, SQL tuning, deployment, serta pengembangan
                  tools internal untuk meningkatkan produktivitas operasional. Saya percaya
                  bahwa teknologi terbaik bukan hanya berfungsi dengan baik, tetapi juga mampu
                  memberikan nilai nyata bagi bisnis melalui solusi yang scalable, berkualitas,
                  dan inovatif.
                </p>
                <button onClick={() => console.log('connect')}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
