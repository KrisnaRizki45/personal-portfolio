import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      Swal.fire({
        title: "Oops!",
        text: "Please enter a valid email address",
        icon: "error",
      });
      return;
    }

    // Kirim email menggunakan EmailJS
    emailjs.send(
      "service_z5p786u",      // ganti dengan service ID dari EmailJS
      "YOUR_TEMPLATE_ID",     // ganti dengan template ID
      { email: email },       // parameter yang dikirim ke template
      "YOUR_PUBLIC_KEY"       // ganti dengan public key
    )
    .then((response) => {
      Swal.fire({
        title: "Subscribed!",
        text: "You have successfully subscribed to our newsletter.",
        icon: "success",
      });
      setEmail(''); // clear input
    })
    .catch((err) => {
      Swal.fire({
        title: "Error",
        text: "Failed to subscribe. Try again later.",
        icon: "error",
      });
    });
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="justify-content-center">
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
