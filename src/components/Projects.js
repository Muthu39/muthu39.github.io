import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bug Reports",
      description: "Reports available on medium @bmkmuthu003",
      imgUrl: projImg1,
      link: "https://medium.com/@bmkmuthu003"
    },
    {
      title: "MAC Address Based Authentication System",
      description: "Developed using python and flask-framework",
      imgUrl: projImg2,
      link: "https://github.com/Muthu39/mac-auth-project"

    },
    {
      title: "Ecommerce Website",
      description: "Designed & Developed using MERN Stack",
      imgUrl: projImg3,
      link: "https://github.com/Muthu39/pro_ecommerce"

    },
    {
      title: "Mango Disease Detection System",
      description: "Designed and Developed using Yolov8 ML model",
      imgUrl: projImg4,
      link: "https://github.com/Muthu39/mango-fruit-disease-detection-using-yolov8-"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Over the years, I’ve dived headfirst into building things—sometimes they worked on the first try (rare), other times I had to fight bugs like a digital gladiator (often). From crafting cybersecurity tools that politely tell hackers “not today,” to full-stack web apps that look good and don’t crash (most of the time), I’ve learned a lot, cried a little, and coded a ton. Below are some of my proudest creations—powered by daily hardwork.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>These tabs are just made to fool you into thinking I have projects in N numbers. So far, I’ve only managed to finish these projects — The rest are still hiding from me. I hope I will them reveal soon.......</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>These tabs are just made to fool you into thinking I have projects in N numbers. So far, I’ve only managed to finish these projects — The rest are still hiding from me. I hope I will them reveal soon.......</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
