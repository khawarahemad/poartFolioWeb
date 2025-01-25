import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/memory.png";
import projImg2 from "../assets/img/VIEWmax.png";
import projImg3 from "../assets/img/Weather.png";
import projImg4 from "../assets/img/Framework.png";
import projImg5 from "../assets/img/RESIZER.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Memory Editing Tool",
      description: "It can edit memory of target process..",
      imgUrl: projImg1,
      githubUrl: "https://github.com/khawarahemad/memory-editing",
    },
    {
      title: "ViewMax",
      description: "The COMMAND Line tool can increase GitHub ProFile View",
      imgUrl: projImg2,
      githubUrl: "https://github.com/khawarahemad/ViewMax",
    },
    {
      title: "Weather App For IOS",
      description: "It's a weather app for IOS Device..",
      imgUrl: projImg3,
      githubUrl: "https://github.com/khawarahemad/Whether-App-for-iOS",
    },
    {
      title: "Apple FrameWork",
      description: "It's a Frame work app for IOS Device. It gives all framework details..",
      imgUrl: projImg4,
      githubUrl: "https://github.com/khawarahemad/Apple-framework",
    },
    {
      title: "img-resizer",
      description: "The website can resize your img size..",
      imgUrl: projImg5,
      githubUrl: "https://github.com/khawarahemad/img-resideer",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here Is Some of my Project's I made. You can look into them on my GitHub Profile. But here is an
                    overview of my projects.
                  </p>
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
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubUrl={project.githubUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Soon I will update more projects here. For now, I don't have projects to showcase here.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Soon I will update more projects here. For now, I don't have projects to showcase here.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};