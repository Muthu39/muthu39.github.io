import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
          <a href="/portfolio">
            <img src={logo} className="footer-logo" alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bmk03/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://x.com/_muthu_003"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Muthu39"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
