import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const handleResumeOpen = () => {
    // Update this path if deployed or hosted differently
    window.open("https://drive.google.com/file/d/1xCnqJ4GeBjP67yoOAB6J14uNTwEW5KkW/view?usp=sharing", "_blank"); // Opens in new tab
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 className="c">Punish Yourself <br />By Exploring My Overflowing Talent (Resume)</h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button type="button" onClick={handleResumeOpen}>Smash It!</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
